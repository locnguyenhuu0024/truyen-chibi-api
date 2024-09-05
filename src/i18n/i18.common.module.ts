import { Global, Module } from '@nestjs/common';
import { I18nCommonService } from './i18n.common.service';

@Global()
@Module({
  providers: [I18nCommonService],
  exports: [I18nCommonService],
})
export class I18nCommonModule {}
