import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistoryEntity } from 'src/database/entities/history.entity';
import { HistoryDto } from './dto/history.dto';
import { BaseService, IPageResult } from 'src/utils/common/base.service';
import { RequestWithPage } from 'src/utils/common/base.type';

@Injectable()
export class HistoryService extends BaseService {
  constructor(
    @InjectRepository(HistoryEntity)
    private historyRepository: Repository<HistoryEntity>,
  ) {
    super();
  }

  async saveHistory(historyDto: HistoryDto): Promise<HistoryEntity> {
    try {
      const checkHistory = await this.historyRepository.findOneBy({
        slug: historyDto.slug,
      });

      if (checkHistory) {
        return await this.updateHistoryInternal(historyDto, checkHistory);
      } else {
        const historyEntity: HistoryEntity = {
          slug: historyDto.slug,
          thumbnail: historyDto.thumbnail,
          read_chapter_ids: [historyDto.latest_read_chapter_id],
          user_id: historyDto.user_id,
          name: historyDto.name,
          latest_read_chapter: historyDto.latest_read_chapter,
          latest_read_chapter_id: historyDto.latest_read_chapter_id,
        };
        return await this.historyRepository.save(historyEntity);
      }
    } catch (error) {
      throw this.badResponse('COMMON.CREATE_DATA_IS_UNSUCCESSFULLY', error);
    }
  }

  async getHistories(
    userId: number,
    query: RequestWithPage,
  ): Promise<IPageResult<HistoryEntity>> {
    const pageConfig = this.checkPaginationAndSort(query as any);
    const [histories, count] = await this.historyRepository.findAndCount({
      ...pageConfig,
      where: { user_id: userId },
    });
    return { count, rows: histories };
  }

  async updateHistoryInternal(
    dataUpdate: HistoryDto,
    data: HistoryEntity,
  ): Promise<any> {
    try {
      data.read_chapter_ids = [
        ...data.read_chapter_ids,
        dataUpdate.latest_read_chapter_id,
      ];
      data.latest_read_chapter_id = dataUpdate.latest_read_chapter_id;
      data.read_chapter_ids = [...new Set(data.read_chapter_ids)];

      return await this.historyRepository.save(data);
    } catch (error) {
      throw this.badResponse('COMMON.UPDATE_DATA_IS_UNSUCCESSFULLY', error);
    }
  }
}
