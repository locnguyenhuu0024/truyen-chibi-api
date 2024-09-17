import appConstant from 'src/utils/appConstant';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';

@Entity(appConstant.TABLE.HISTORY)
export class HistoryEntity extends BaseEntity {
  @Column({ unique: true })
  slug: string;

  @Column()
  name: string;

  @Column()
  user_id: number;

  @Column()
  thumbnail: string;

  @Column('simple-array')
  read_chapter_ids: string[];

  @Column()
  latest_read_chapter?: string;

  @Column()
  latest_read_chapter_id?: string;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => UserEntity)
  user?: UserEntity;
}
