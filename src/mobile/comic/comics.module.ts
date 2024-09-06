import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadFileService } from 'src/utils/upload.file.service';
import { ComicsController } from './comics.controller';
import { ComicsService } from './comics.service';

@Module({
  // imports: [TypeOrmModule.forFeature([])],
  controllers: [ComicsController],
  providers: [ComicsService, UploadFileService],
  exports: [ComicsService],
})
export class ComicsModule {}
