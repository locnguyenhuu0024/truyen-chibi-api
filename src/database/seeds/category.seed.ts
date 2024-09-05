import { Seeder } from 'nestjs-seeder';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from '../entities/category.entity';

const categories = [
  { slug: 'action', name: 'Action' },
  { slug: 'adult', name: 'Adult' },
  { slug: 'adventure', name: 'Adventure' },
  { slug: 'anime', name: 'Anime' },
  { slug: 'chuyen-sinh', name: 'Chuyển Sinh' },
  { slug: 'comedy', name: 'Comedy' },
  { slug: 'comic', name: 'Comic' },
  { slug: 'cooking', name: 'Cooking' },
  { slug: 'co-dai', name: 'Cổ Đại' },
  { slug: 'doujinshi', name: 'Doujinshi' },
  { slug: 'drama', name: 'Drama' },
  { slug: 'dam-my', name: 'Đam Mỹ' },
  { slug: 'ecchi', name: 'Ecchi' },
  { slug: 'fantasy', name: 'Fantasy' },
  { slug: 'gender-bender', name: 'Gender Bender' },
  { slug: 'harem', name: 'Harem' },
  { slug: 'historical', name: 'Historical' },
  { slug: 'horror', name: 'Horror' },
  { slug: 'josei', name: 'Josei' },
  { slug: 'live-action', name: 'Live action' },
  { slug: 'manga', name: 'Manga' },
  { slug: 'manhua', name: 'Manhua' },
  { slug: 'manhwa', name: 'Manhwa' },
  { slug: 'martial-arts', name: 'Martial Arts' },
  { slug: 'mature', name: 'Mature' },
  { slug: 'mecha', name: 'Mecha' },
  { slug: 'mystery', name: 'Mystery' },
  { slug: 'ngon-tinh', name: 'Ngôn Tình' },
  { slug: 'one-shot', name: 'One shot' },
  { slug: 'psychological', name: 'Psychological' },
  { slug: 'romance', name: 'Romance' },
  { slug: 'school-life', name: 'School Life' },
  { slug: 'sci-fi', name: 'Sci-fi' },
  { slug: 'seinen', name: 'Seinen' },
  { slug: 'shoujo', name: 'Shoujo' },
  { slug: 'shoujo-ai', name: 'Shoujo Ai' },
  { slug: 'shounen', name: 'Shounen' },
  { slug: 'shounen-ai', name: 'Shounen Ai' },
  { slug: 'slice-of-life', name: 'Slice of Life' },
  { slug: 'smut', name: 'Smut' },
  { slug: 'soft-yaoi', name: 'Soft Yaoi' },
  { slug: 'soft-yuri', name: 'Soft Yuri' },
  { slug: 'sports', name: 'Sports' },
  { slug: 'supernatural', name: 'Supernatural' },
  { slug: 'tap-chi-truyen-tranh', name: 'Tạp chí truyện tranh' },
  { slug: 'thieu-nhi', name: 'Thiếu Nhi' },
  { slug: 'tragedy', name: 'Tragedy' },
  { slug: 'trinh-tham', name: 'Trinh Thám' },
  { slug: 'truyen-scan', name: 'Truyện scan' },
  { slug: 'truyen-mau', name: 'Truyện Màu' },
  { slug: 'viet-nam', name: 'Việt Nam' },
  { slug: 'webtoon', name: 'Webtoon' },
  { slug: 'xuyen-khong', name: 'Xuyên Không' },
  { slug: '16', name: '16+' },
];

@Injectable()
export class CategorySeeder implements Seeder {
  constructor(
    @InjectRepository(CategoryEntity)
    private repository: Repository<CategoryEntity>,
  ) {}
  async seed(): Promise<any> {
    for (const category of categories) {
      const existingCategory = await this.repository.findOne({
        where: { slug: category.slug },
      });
      if (!existingCategory) {
        await this.repository.save(category);
      }
    }
    console.log('Categories seeded successfully');
  }
  drop(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
