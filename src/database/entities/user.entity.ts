import appConstant from 'src/utils/appConstant';
import { Column, Entity, JoinTable, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Gender } from 'src/utils/enums/user';
import { HistoryEntity } from './history.entity';

@Entity(appConstant.TABLE.USER)
export class UserEntity extends BaseEntity {
  @Column({ length: 100, nullable: true })
  first_name: string;

  @Column({ length: 100, default: '', nullable: true })
  last_name: string;

  @Column({ length: 100, default: '' })
  user_name: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 20 })
  phone_number: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  birth: Date;

  @Column({ default: Gender.MALE })
  gender: Gender;

  @Column({ nullable: true })
  avatar_url: string;

  @Column({ default: true })
  is_activated?: boolean;

  @Column({ default: true })
  is_blocked?: boolean;

  @Column({ nullable: true })
  refreshToken: string;

  @OneToMany(() => HistoryEntity, (h) => h.user)
  @JoinTable()
  histories?: HistoryEntity[];
}
