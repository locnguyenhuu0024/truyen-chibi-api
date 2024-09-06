import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';
import { loadEnv } from './utils';
import helmet from 'helmet';
import * as morgan from 'morgan-body';
// import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { I18nCommonService } from './i18n/i18n.common.service';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { OperationObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { ManageTag, MobileTag } from './utils/appConstant';
import { useContainer } from 'class-validator';

loadEnv();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  // const logger = app.get(WINSTON_MODULE_NEST_PROVIDER);
  const i18service = app.get(I18nCommonService);
  // app.useLogger(logger);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new HttpExceptionFilter(i18service));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const swaggerConfigTemp = new DocumentBuilder()
    .setTitle('Truyen Chibi system')
    .setDescription('The Truyen Chibi APIs description')
    .setVersion('1.0')
    .addTag('Truyen Chibi project')
    .addBearerAuth()
    .setExternalDoc('swagger document JSON', '/doc.json');

  if (configService.get('NODE_ENV') === 'local') {
    swaggerConfigTemp.addServer('http://localhost:8089/api');
  } else {
    swaggerConfigTemp.addServer('https://truyen-chibi-api.vercel.app/api');
  }
  const swaggerConfig = swaggerConfigTemp.build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  const manageDoc = filterSwaggerRoutes(document, ManageTag);
  SwaggerModule.setup('', app, manageDoc);
  SwaggerModule.setup('docs', app, manageDoc, {
    jsonDocumentUrl: 'doc.json',
    yamlDocumentUrl: 'doc.yaml',
  });

  const document1 = SwaggerModule.createDocument(app, swaggerConfig);

  const mobileDoc = filterSwaggerRoutes(document1, MobileTag);

  SwaggerModule.setup('docs/mobile', app, mobileDoc, {
    jsonDocumentUrl: 'doc.json',
    yamlDocumentUrl: 'doc.yaml',
  });

  app.setGlobalPrefix('api');

  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  app.enableCors();
  // somewhere in your initialization file
  app.use(helmet());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.contentSecurityPolicy());
  // if (configService.get('NODE_ENV') === 'local') {
  //   (morgan as any)(app.getHttpAdapter().getInstance(), {
  //     stream: {
  //       write: (message: string) => {
  //         // logger.log(message);
  //         return true;
  //       },
  //     },
  //     logRequestBody: false,
  //     logResponseBody: false,
  //     noColors: false,
  //     // maxBodyLength: 5_000_000,
  //   });
  // } else {
  //   (morgan as any)(app.getHttpAdapter().getInstance(), {
  //     stream: {
  //       write: (message: string) => {
  //         // logger.log(message);
  //         return true;
  //       },
  //     },
  //     noColors: true,
  //     maxBodyLength: 5_000_000,
  //   });
  // }

  await app.listen(configService.get('SERVER_PORT') || 8089);
}
bootstrap();

export function filterSwaggerRoutes(doc: OpenAPIObject, tag: string) {
  const publicDoc = structuredClone(doc);
  Object.entries(publicDoc.paths).map(([, path]) => {
    Object.entries(path).forEach(([k, operation]) => {
      const op = operation as OperationObject;
      if (!op.tags?.includes(tag)) {
        delete path[k]; // delete the op from the public doc;
      } else {
        op.tags = op.tags.filter((t) => t !== tag);
      }
    });
  });
  return publicDoc;
}
