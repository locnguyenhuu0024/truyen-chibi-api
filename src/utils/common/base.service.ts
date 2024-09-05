import appConstant from 'src/utils/appConstant';
import { parseNumber } from 'src/utils';
import { ApiProperty } from '@nestjs/swagger';
import { BadResponseException } from './base.type';
import { I18nCommonService, KeyTranslate } from 'src/i18n/i18n.common.service';
import { HttpExceptionOptions, NotFoundException } from '@nestjs/common';
import { RequestContext } from 'nestjs-request-context';
import { FindOptionsOrderValue } from 'typeorm';
export class IPageResult<T> {
  @ApiProperty()
  count: number;
  @ApiProperty({ isArray: true })
  rows: T[];
}

export class BaseService {
  constructor(private _i8nCommonService?: I18nCommonService) {}
  protected checkPaginationAndSort({
    page = 1,
    limit = appConstant.DATABASE_DEFAULT.LIMIT,
    is_all = false,
    field_sort = 'updated_at',
    sort_type = 'DESC',
  }: {
    page: number;
    limit: number;
    is_all?: boolean;
    field_sort: string;
    sort_type: FindOptionsOrderValue;
  }): any {
    page = parseNumber(page, appConstant.DATABASE_DEFAULT.PAGE);
    limit = parseNumber(limit, appConstant.DATABASE_DEFAULT.LIMIT);
    const offset = page > 0 ? (page - 1) * limit : page;
    if (!field_sort) field_sort = 'updated_at';
    if (!sort_type) sort_type = 'DESC';

    if (is_all) {
      return {
        order: {
          [field_sort]: sort_type,
        },
      } as any;
    }
    return {
      page,
      skip: offset,
      take: limit,
      order: {
        [field_sort]: sort_type,
      },
    };
  }

  protected badResponse(
    objectOrError: KeyTranslate,
    descriptionOrOptions?: string | HttpExceptionOptions,
  ) {
    throw new BadResponseException(objectOrError, descriptionOrOptions);
  }

  protected NotFound(
    objectOrError: KeyTranslate,
    descriptionOrOptions?: string | HttpExceptionOptions,
  ) {
    throw new NotFoundException(objectOrError, descriptionOrOptions);
  }

  protected badResponseNoTranslate(
    objectOrError: KeyTranslate | string,
    descriptionOrOptions?: string | HttpExceptionOptions,
  ) {
    throw new BadResponseException(objectOrError, descriptionOrOptions);
  }

  protected badResponseWithText(
    objectOrError: KeyTranslate,
    textPlus: string,
    descriptionOrOptions?: string | HttpExceptionOptions,
  ) {
    if (!this._i8nCommonService) {
      this,
        this.badResponseNoTranslate(
          'Please add _i8nCommonService in constructor supper',
        );
    }
    const text = this._i8nCommonService.get(objectOrError);
    throw new BadResponseException(`${text} ${textPlus}`, descriptionOrOptions);
  }

  protected getSiteId() {
    const siteId: string = RequestContext.currentContext.req.headers['site-id'];
    return siteId;
  }
}
