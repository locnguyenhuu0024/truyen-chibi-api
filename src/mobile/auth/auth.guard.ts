import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import * as moment from 'moment';
import { SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from 'src/utils/appConstant';

@Injectable()
export class AuthGuard implements CanActivate {
  private logger = new Logger(AuthGuard.name);
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const token =
      this.extractTokenFromHeaderFromOovoom(request) ||
      this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get('JWT_KEY_END_USER'),
      });

      if (payload.exp < moment().unix()) {
        throw new Error('INVALID_TOKEN');
      }
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request['user'] = { ...payload };
    } catch (err) {
      this.logger.log(err);
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private extractTokenFromHeaderFromOovoom(
    request: Request,
  ): string | undefined {
    const token = request.headers.token as string;
    return token || undefined;
  }
}

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
