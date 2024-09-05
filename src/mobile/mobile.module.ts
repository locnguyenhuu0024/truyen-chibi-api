import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ComicsModule } from './comic/comics.module';
@Module({
  imports: [UsersModule, AuthModule, ComicsModule],
})
export class MobileModule {}
