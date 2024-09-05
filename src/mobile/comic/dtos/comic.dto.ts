import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { Image } from 'src/utils/types/chapter';

export class CategoryDto {
  @ApiProperty()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsOptional()
  slug: string;
}

export class ChapterResponse {
  chapter_images: Image[];
  chapter_name: string;
  comic_name: string;
}
