import appConstant from 'src/utils/appConstant';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity(appConstant.TABLE.CATEGORY)
export class CategoryEntity extends BaseEntity {
  @Column({ unique: true })
  slug: string;

  @Column()
  name: string;
}
