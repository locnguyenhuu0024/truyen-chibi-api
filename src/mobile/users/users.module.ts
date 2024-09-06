import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
// import { UserEntity } from 'src/database/entities/user.entity';
import { UsersService } from './users.service';
import { UploadFileService } from 'src/utils/upload.file.service';

@Module({
  // imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersService, UploadFileService],
  exports: [UsersService],
})
export class UsersModule {}
