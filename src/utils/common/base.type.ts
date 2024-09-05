import { BadRequestException, HttpExceptionOptions } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { KeyTranslate } from 'src/i18n/i18n.common.service';
import { FindOptionsOrderValue } from 'typeorm';
import { ComicTypes } from '../enums/comic.type';

export class RequestID {
  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  @ApiProperty()
  id: number;
}

export class RequestIDString {
  @IsNotEmpty()
  @ApiProperty()
  id: string;
}

export class RequestWithPage {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page?: number = 1;
  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit?: number;
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  text_search?: string;
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  sort_type?: FindOptionsOrderValue = 'DESC';
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  field_sort?: string = 'updated_at';
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  type?: string = ComicTypes.New;
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  keyword?: string;
}

export class UploadFileRequest {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  extension: string;
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  base64: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  file_name: string;
}

export class BadResponseException extends BadRequestException {
  constructor(
    objectOrError?: KeyTranslate | string,
    descriptionOrOptions?: string | HttpExceptionOptions,
  ) {
    super(objectOrError, descriptionOrOptions);
  }
}

export class BaseDto {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  created_at?: Date;
  @ApiProperty()
  updated_at?: Date;
  // Add this column to your entity!
  deletedAt?: Date;
}
