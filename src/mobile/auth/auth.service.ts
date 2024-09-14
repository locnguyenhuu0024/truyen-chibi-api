import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { LoginRequestDto, LoginResponseDto } from './dto/login.dto';
import { UserEntity } from 'src/database/entities/user.entity';
import { Token } from './interfaces/token.interface';
import { UsersService } from '../users/users.service';
import { SignupDto } from '../users/dto/signup.dto';
import { BaseService } from 'src/utils/common/base.service';
import { I18nCommonService } from 'src/i18n/i18n.common.service';
import { comparePassword } from 'src/utils/common/crypto';

@Injectable()
export class AuthService extends BaseService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
    protected i8nCommonService: I18nCommonService,
  ) {
    super(i8nCommonService);
  }

  async signup(signupDto: SignupDto): Promise<Token> {
    const user = await this.userService.create(signupDto);
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<UserEntity> {
    const user = await this.userService.findByEmail(email);
    if (!user) this.badResponse('USER.LOGIN.USER_DOES_NOT_EXIST');

    if (await comparePassword(password, user.password)) {
      return user;
    }
    throw new UnauthorizedException('USER.LOGIN.INCORRECT_ACCOUNT_OR_PASSWORD');
  }

  async login(loginRequestDto: LoginRequestDto): Promise<LoginResponseDto> {
    const { email, password } = loginRequestDto;

    const user = await this.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('USER.LOGIN.USER_DOES_NOT_EXIST');
    }

    const payload = { email: user.email, sub: user.id };
    const access_token = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: this.configService.get<number>('JWT_EXPIRATION_TIME'),
    });
    console.log(access_token);
    const refresh_token = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRATION_TIME'),
    });

    // Lưu refresh token vào database
    await this.userService.saveRefreshToken(user.id, refresh_token);

    const response: LoginResponseDto = {
      access_token,
      refresh_token,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      phone_number: user.phone_number,
      birth: user.birth,
      gender: user.gender,
      avatar_url: user.avatar_url,
      user_name: user.user_name,
    };

    return response;
  }

  async refresh(refresh_token: string): Promise<Token> {
    try {
      const payload = await this.jwtService.verifyAsync(refresh_token, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      });

      // Kiểm tra xem refresh token có tồn tại trong database không
      const isValidRefreshToken = await this.userService.validateRefreshToken(
        payload.sub,
        refresh_token,
      );
      if (!isValidRefreshToken) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      const newAccessToken = this.jwtService.sign(
        { email: payload.email, sub: payload.sub },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
          expiresIn: this.configService.get<string>('JWT_EXPIRATION_TIME'),
        },
      );
      return { access_token: newAccessToken, refresh_token };
    } catch (e) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async logout(userId: number): Promise<void> {
    // Xóa refresh token khỏi database khi đăng xuất
    await this.userService.removeRefreshToken(userId);
  }
}
