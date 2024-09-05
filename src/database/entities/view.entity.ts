import appConstant from 'src/utils/appConstant';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';

@Entity(appConstant.TABLE.VIEW)
export class ViewEntity extends BaseEntity {
  @Column({})
  slug: string;

  @Column()
  name: string;

  @Column()
  thumbnail: string;

  @Column()
  latest_read: string;

  @Column()
  user_id: number;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => UserEntity)
  user: UserEntity;
}
