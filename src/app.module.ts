import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseProvider } from './database/orm/database.provider.ts';

import typeormConfig from 'src/database/config/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import * as winston from 'winston';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import { I18nProvider } from './i18n/i18n.provider.js';
import { I18nCommonModule } from './i18n/i18.common.module.js';
import { RequestContextModule } from 'nestjs-request-context';
import { MobileModule } from './mobile/mobile.module.js';
import { AuthModule } from './mobile/auth/auth.module.js';
import { UploadFileService } from './utils/upload.file.service.js';
import { ExternalComicsModule } from './external/comics/external.comics.module.js';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig],
      envFilePath: [`.env.${process.env.NODE_ENV}`, `env`],
    }),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('Truyen Chibi API', {
              colors: true,
              prettyPrint: true,
            }),
          ),
        }),
        new winston.transports.File({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('Truyen Chibi API', {
              colors: true,
              prettyPrint: true,
            }),
          ),
          filename: 'logs/server_error.log',
          level: 'error',
        }),
        new winston.transports.File({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('Truyen Chibi API', {
              colors: true,
              prettyPrint: true,
            }),
          ),
          filename: 'logs/all_info.log',
          level: 'info',
        }),
        new winston.transports.File({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('Truyen Chibi API', {
              colors: true,
              prettyPrint: true,
            }),
          ),
          filename: 'logs/all.log',
        }),
      ],
      exceptionHandlers: [
        new winston.transports.File({
          filename: 'logs/not_handle_exceptions.log',
        }),
      ],
      exitOnError: false,
    }),
    ScheduleModule.forRoot(),
    DatabaseProvider,
    MobileModule,
    ExternalComicsModule,
    I18nProvider,
    I18nCommonModule,
    RequestContextModule,
    AuthModule,
  ],
  providers: [UploadFileService],
})
export class AppModule {}
