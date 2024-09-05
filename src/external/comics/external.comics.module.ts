import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ExternalComicsService } from './external.comics.service';
@Global()
@Module({
  imports: [HttpModule],
  providers: [ExternalComicsService],
  exports: [ExternalComicsService],
})
export class ExternalComicsModule {}
