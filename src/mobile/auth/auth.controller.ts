// src/auth/auth.controller.ts
import { Controller, Post, Body, Req, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto/login.dto';
import { Request } from 'express';
import { SignupDto } from '../users/dto/signup.dto';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'sign in customers' })
  @ApiBadRequestResponse({ status: 500, description: 'Data request wrong.' })
  @Post('signup')
  async signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }

  @HttpCode(201)
  @ApiOperation({ summary: 'sign in user' })
  @ApiUnauthorizedResponse({ status: 401, description: 'Unauthorized.' })
  @Post('login')
  async login(@Body() loginRequestDto: LoginRequestDto) {
    return this.authService.login(loginRequestDto);
  }

  @Post('refresh')
  async refresh(@Req() request: Request) {
    const refresh_token = request.headers.authorization.split(' ')[1];
    return this.authService.refresh(refresh_token);
  }
}
