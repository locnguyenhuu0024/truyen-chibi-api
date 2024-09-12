import { Controller, Get, Param, Query } from '@nestjs/common';
import { BaseController } from '../base.controller';
import {
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ComicsTag } from 'src/utils/appConstant';
import { ComicsService } from './comics.service';
import { RequestWithPage } from 'src/utils/common/base.type';
import { CategoryDto } from 'src/external/dtos/comic.dto';
import { ChapterResponse } from './dtos/comic.dto';
import { Comic } from 'src/utils/types/comic';

@ApiTags(ComicsTag, 'comics')
@Controller('comics')
export class ComicsController extends BaseController {
  constructor(private readonly service: ComicsService) {
    super();
  }

  @ApiOperation({ summary: 'get comics' })
  @ApiUnauthorizedResponse({ status: 401, description: 'Unauthorized.' })
  @Get('')
  async getAll(@Query() query: RequestWithPage): Promise<any> {
    return await this.service.getList(query);
  }

  @ApiOperation({ summary: 'get home' })
  @ApiUnauthorizedResponse({ status: 401, description: 'Unauthorized.' })
  @Get('home')
  async getHome(): Promise<any> {
    return await this.service.getHome();
  }

  @ApiOperation({ summary: 'get categories' })
  @ApiUnauthorizedResponse({ status: 401, description: 'Unauthorized.' })
  @Get('categories')
  async getCategories(): Promise<CategoryDto[]> {
    return await this.service.getCategories();
  }

  @ApiOperation({ summary: 'get categories' })
  @ApiUnauthorizedResponse({ status: 401, description: 'Unauthorized.' })
  @Get('search')
  async searchComic(@Query() query: RequestWithPage): Promise<CategoryDto[]> {
    return await this.service.searchComic(query);
  }

  @ApiOperation({ summary: 'get categories' })
  @ApiUnauthorizedResponse({ status: 401, description: 'Unauthorized.' })
  @Get(':slug')
  async getComicBySlug(@Param('slug') slug): Promise<CategoryDto[]> {
    return await this.service.getComicBySlug(slug);
  }

  @ApiOperation({ summary: 'get categories' })
  @ApiUnauthorizedResponse({ status: 401, description: 'Unauthorized.' })
  @Get('chapter/:id')
  async getChapterById(@Param('id') chapterId): Promise<ChapterResponse> {
    return await this.service.getChapterById(chapterId);
  }

  @ApiOperation({ summary: 'get categories' })
  @ApiUnauthorizedResponse({ status: 401, description: 'Unauthorized.' })
  @Get('categories/:categorySlug')
  async getComicsByCategory(
    @Param('categorySlug') categorySlug,
    @Query() query: RequestWithPage,
  ): Promise<Comic[]> {
    return await this.service.getComicsByCategory(categorySlug, query.page);
  }
}
