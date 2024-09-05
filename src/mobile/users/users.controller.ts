import { Controller } from '@nestjs/common';
import { BaseController } from '../base.controller';
import { ApiTags } from '@nestjs/swagger';
import { ManageTag } from 'src/utils/appConstant';
import { UsersService } from './users.service';

@ApiTags(ManageTag, 'user')
@Controller('user')
export class UsersController extends BaseController {
  constructor(private readonly service: UsersService) {
    super();
  }
}
