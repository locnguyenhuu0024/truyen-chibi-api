import appConstant from 'src/utils/appConstant';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Gender } from 'src/utils/enums/user';

@Entity(appConstant.TABLE.USER)
export class UserEntity extends BaseEntity {
  @Column({ length: 100 })
  first_name: string;

  @Column({ length: 100, default: '' })
  last_name: string;

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

  @Column({ default: false })
  is_activated?: boolean;

  @Column({ default: false })
  is_blocked?: boolean;
}
