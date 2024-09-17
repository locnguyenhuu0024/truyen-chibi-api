import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class HistoryDto {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  slug: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  thumbnail: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  latest_read_chapter: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  latest_read_chapter_id: string;
}
