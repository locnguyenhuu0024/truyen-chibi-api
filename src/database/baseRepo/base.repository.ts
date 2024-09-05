import { FindManyOptions, Repository } from 'typeorm';
import { ObjectLiteral } from 'typeorm/common/ObjectLiteral';
import appConstant from 'src/utils/appConstant';
import { parseNumber } from 'src/utils';
import { ApiProperty } from '@nestjs/swagger';

export class IPageResult<T> {
  @ApiProperty()
  count: number;
  @ApiProperty({ isArray: true })
  rows: T[];
}

export class BaseRepository<
  Entity extends ObjectLiteral,
> extends Repository<Entity> {
  async findAndPaging(
    options?: FindManyOptions<Entity>,
    page: number = 1,
    limit: number = appConstant.DATABASE_DEFAULT.LIMIT,
  ): Promise<IPageResult<Entity>> {
    const pageConfig = this.checkPagination(page, limit);
    const [results, count] = await this.findAndCount({
      ...options,
      ...pageConfig,
    });
    return {
      count,
      rows: results,
    };
  }

  private checkPagination(
    page: number = 1,
    limit: number = appConstant.DATABASE_DEFAULT.LIMIT,
  ): any {
    page = parseNumber(page, appConstant.DATABASE_DEFAULT.PAGE);
    limit = parseNumber(limit, appConstant.DATABASE_DEFAULT.LIMIT);
    const offset = page > 0 ? (page - 1) * limit : page;
    return {
      offset,
      limit,
    };
  }
}
