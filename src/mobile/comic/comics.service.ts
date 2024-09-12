import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/database/entities/user.entity';
import { BaseService } from 'src/utils/common/base.service';
import { I18nCommonService } from 'src/i18n/i18n.common.service';
import { ExternalComicsService } from 'src/external/comics/external.comics.service';
import { RequestWithPage } from 'src/utils/common/base.type';
import { CategoryDto } from 'src/external/dtos/comic.dto';
import { ChapterResponse } from './dtos/comic.dto';
import { Comic } from 'src/utils/types/comic';

@Injectable()
export class ComicsService extends BaseService {
  constructor(
    protected externalExternalService: ExternalComicsService,
    protected i8nCommonService: I18nCommonService,
  ) {
    super(i8nCommonService);
  }

  async getHome(): Promise<UserEntity> {
    const home = await this.externalExternalService.home();
    return home;
  }

  async getList(query: RequestWithPage): Promise<UserEntity> {
    const list = await this.externalExternalService.list(query);
    return list;
  }

  async getComicBySlug(slug: string): Promise<any> {
    const search = await this.externalExternalService.details(slug);
    return search;
  }

  async getCategories(): Promise<CategoryDto[]> {
    const categories = await this.externalExternalService.categories();
    return categories;
  }

  async searchComic(query: RequestWithPage): Promise<any> {
    const search = await this.externalExternalService.search(query);
    return search;
  }

  async getChapterById(chapterId: string): Promise<ChapterResponse> {
    const chapterFromExternal =
      await this.externalExternalService.chapter(chapterId);
    const {
      domain_cdn,
      item: { chapter_path, chapter_image, chapter_name, comic_name },
    } = chapterFromExternal;
    const chapterImages = chapter_image.map((i) => ({
      ...i,
      image_file: `${domain_cdn}/${chapter_path}/${i.image_file}`,
    }));
    return {
      chapter_images: chapterImages,
      chapter_name,
      comic_name: comic_name.replace(/\s*\[.*?\]$/, ''),
    };
  }

  async getComicsByCategory(
    categorySlug: string,
    page: number,
  ): Promise<Comic[]> {
    const comics = await this.externalExternalService.getComicsByCategory(
      categorySlug,
      page,
    );
    return comics;
  }
}
