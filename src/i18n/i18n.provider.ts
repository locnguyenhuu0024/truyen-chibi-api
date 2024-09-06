import { DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';
import {
  I18nModule,
  AcceptLanguageResolver,
  QueryResolver,
  HeaderResolver,
  I18nOptionsWithoutResolvers,
} from 'nestjs-i18n';

export const I18nProvider: DynamicModule = I18nModule.forRootAsync({
  inject: [ConfigService],
  useFactory: buildOptions,
  resolvers: [
    { use: QueryResolver, options: ['locale'] },
    AcceptLanguageResolver,
    new HeaderResolver(['locale', 'lang']),
  ],
});

export function buildOptions(): I18nOptionsWithoutResolvers {
  // configService: ConfigService,
  // const lang = configService.getOrThrow('FALLBACK_LANGUAGE');
  return {
    fallbackLanguage: 'en',
    // fallbacks: {
    //   'en-CA': 'fr',
    //   'en-*': 'en',
    //   'fr-*': 'fr',
    // },
    loaderOptions: {
      path: path.join(__dirname, '..', 'i18n/'),
      watch: true,
    },
    typesOutputPath: path.join(__dirname, '..', 'i18n/i18n.generated.ts'),
  };
}
