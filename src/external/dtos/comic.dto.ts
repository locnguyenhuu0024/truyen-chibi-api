import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CategoryDto {
  @ApiProperty()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsOptional()
  slug: string;
}
