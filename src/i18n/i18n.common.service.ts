import { Injectable } from '@nestjs/common';
import { I18nService, I18nContext } from 'nestjs-i18n';
import enObject from 'src/i18n/en/lang.json';
import { PathsType } from 'src/utils';

export type KeyTranslate = PathsType<typeof enObject>;
export type KeyCommonTranslate = PathsType<typeof enObject.COMMON>;

@Injectable()
export class I18nCommonService {
  constructor(private readonly i18n: I18nService) {}
  getCommonMessage(key: KeyCommonTranslate): any {
    const common: KeyTranslate = 'COMMON';
    const result = this.i18n.t(`lang.${common}.${key}`, {
      lang: I18nContext.current().lang,
    });
    return result;
  }
  get(key: KeyTranslate): string {
    this.i18n.resolveLanguage(I18nContext.current().lang);
    return this.i18n.translate(`lang.${key}`);
  }
}
