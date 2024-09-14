import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MinLength,
  MaxLength,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { UploadFileRequest } from 'src/utils/common/base.type';
import { Gender } from 'src/utils/enums/user';

export class SignupDto {
  @IsString()
  @MinLength(4)
  @MaxLength(100)
  @ApiProperty()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(100)
  @ApiProperty()
  password: string;

  @IsString()
  @MaxLength(20)
  @ApiProperty()
  @IsOptional()
  first_name: string;

  @IsString()
  @MaxLength(20)
  @ApiProperty()
  @IsOptional()
  last_name: string;

  @IsString()
  @MaxLength(20)
  @ApiProperty()
  user_name: string;

  @IsString()
  @MaxLength(20)
  @ApiProperty()
  @IsOptional()
  phone_number: string;

  @ApiProperty()
  @IsOptional()
  birth: Date;

  @IsEnum(Gender)
  @ApiProperty()
  @IsOptional()
  gender: Gender;

  @ApiProperty()
  @IsOptional()
  avatar: UploadFileRequest;
}
