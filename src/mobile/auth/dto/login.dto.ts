import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { BaseDto } from 'src/utils/common/base.type';
import { Gender } from 'src/utils/enums/user';

export class LoginRequestDto {
  email: string;
  password: string;
}
export class UserAuth {
  @ApiProperty()
  @IsNotEmpty()
  sub: number;
  email: string;
  user_id: number;
  isVerified?: boolean;
}

export class LoginResponseDto extends BaseDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  phone_number: string;

  @ApiProperty()
  birth: Date;

  @IsEnum(Gender)
  @ApiProperty()
  gender: Gender;

  @ApiProperty()
  avatar_url: string;

  @ApiProperty()
  access_token: string;

  @ApiProperty()
  refresh_token: string;
}
