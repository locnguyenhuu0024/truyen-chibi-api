import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ComicsModule } from './comic/comics.module';
import { HistoryModule } from './history/history.module';
@Module({
  imports: [UsersModule, AuthModule, ComicsModule, HistoryModule],
})
export class MobileModule {}
