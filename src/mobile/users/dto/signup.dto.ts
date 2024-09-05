import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, MaxLength, IsEnum } from 'class-validator';
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
  first_name: string;

  @IsString()
  @MaxLength(20)
  @ApiProperty()
  last_name: string;

  @IsString()
  @MaxLength(20)
  @ApiProperty()
  phone_number: string;

  @ApiProperty()
  birth: Date;

  @IsEnum(Gender)
  @ApiProperty()
  gender: Gender;

  @ApiProperty()
  avatar: UploadFileRequest;
}
