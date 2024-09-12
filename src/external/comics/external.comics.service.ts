import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/utils/common/base.service';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { RequestWithPage } from 'src/utils/common/base.type';
import { CategoryDto } from '../dtos/comic.dto';
import { Chapter } from 'src/utils/types/chapter';
import { Comic } from 'src/utils/types/comic';

@Injectable()
export class ExternalComicsService extends BaseService {
  private comicsAPI: string = null;
  private chapterAPI: string = null;
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {
    super();
    this.comicsAPI = this.configService.get('BASE_COMICS_URL');
    this.chapterAPI = this.configService.get('BASE_CHAPTER_URL');
  }

  async home(): Promise<any> {
    try {
      const res = await this.httpService.axiosRef.get(`${this.comicsAPI}/home`);
      return res.data?.data;
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  async list(query: RequestWithPage): Promise<any> {
    try {
      const res = await this.httpService.axiosRef.get(
        `${this.comicsAPI}/danh-sach/${query.type}?page=${query.page}`,
      );
      return res.data?.data;
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  async categories(): Promise<CategoryDto[]> {
    try {
      const res = await this.httpService.axiosRef.get(
        `${this.comicsAPI}/the-loai`,
      );
      return res.data?.data?.items;
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  async getComicsByCategory(
    categorySlug: string,
    page: number,
  ): Promise<Comic[]> {
    try {
      const res = await this.httpService.axiosRef.get(
        `${this.comicsAPI}/the-loai/${categorySlug}?page=${page}`,
      );
      return res.data?.data?.items;
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  async search(query: RequestWithPage): Promise<any[]> {
    try {
      const res = await this.httpService.axiosRef.get(
        `${this.comicsAPI}/tim-kiem`,
        {
          params: { keyword: query.keyword },
        },
      );
      return res.data?.data?.items;
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  async details(slug: string): Promise<any[]> {
    try {
      const res = await this.httpService.axiosRef.get(
        `${this.comicsAPI}/truyen-tranh/${slug}`,
      );
      return res.data?.data?.item;
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  async chapter(id: string): Promise<Chapter> {
    try {
      const res = await this.httpService.axiosRef.get(
        `${this.chapterAPI}/${id}`,
      );
      return res.data?.data;
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }
}
