import appConstant from 'src/utils/appConstant';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity(appConstant.TABLE.USER_TOKEN)
export class UserTokenEntity extends BaseEntity {
  @Column()
  user_id: number;

  @Column()
  refresh_token: string;

  @Column()
  access_token: string;
}
