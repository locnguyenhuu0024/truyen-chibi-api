import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
import { BadResponseException } from '../utils/common/base.type';
import { KeyTranslate } from 'src/i18n/i18n.common.service';
import { HttpExceptionOptions } from '@nestjs/common';
@ApiHeader({
  name: 'locale',
  description: 'add language for api',
  required: false,
})
@ApiBearerAuth()
@ApiTags('Manage Truyen Chibi')
// @UseGuards(AuthGuard)
export class BaseController {
  protected badResponse(
    objectOrError?: KeyTranslate,
    descriptionOrOptions?: string | HttpExceptionOptions,
  ) {
    throw new BadResponseException(objectOrError, descriptionOrOptions);
  }

  protected badResponseNoTranslate(
    objectOrError?: KeyTranslate | string,
    descriptionOrOptions?: string | HttpExceptionOptions,
  ) {
    throw new BadResponseException(objectOrError, descriptionOrOptions);
  }
}
