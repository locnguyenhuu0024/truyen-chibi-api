import {
  Controller,
  Post,
  Body,
  Req,
  UseGuards,
  Query,
  Get,
} from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryDto } from './dto/history.dto';
import { BaseController } from '../base.controller';
import { AuthGuard } from '../auth/auth.guard';
import { ComicsTag } from 'src/utils/appConstant';
import { ApiTags } from '@nestjs/swagger';
import { RequestWithPage } from 'src/utils/common/base.type';

@UseGuards(AuthGuard)
@ApiTags(ComicsTag, 'comics')
@Controller('history')
export class HistoryController extends BaseController {
  constructor(private readonly historyService: HistoryService) {
    super();
  }

  @Get('')
  async getHistories(@Req() request, @Query() query: RequestWithPage) {
    const user_id = request.user.sub;
    return this.historyService.getHistories(user_id, query);
  }

  @Post('save')
  async saveHistory(@Body() historyDto: HistoryDto, @Req() request) {
    historyDto.user_id = request.user.sub;
    return this.historyService.saveHistory(historyDto);
  }
}
