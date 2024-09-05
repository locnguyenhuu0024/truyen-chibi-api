import {
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from 'typeorm';

// import * as moment from 'moment';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @CreateDateColumn({
    // transformer: {
    //   to(value) {
    //     if (value) return moment.utc(value).toDate();
    //     return value;
    //   },
    //   from(value) {
    //     return value;
    //   },
    // },
  })
  created_at?: Date;

  @UpdateDateColumn({
    // transformer: {
    //   to(value) {
    //     if (value) return moment.utc(value).toDate();
    //     return value;
    //   },
    //   from(value) {
    //     return value;
    //   },
    // },
  })
  updated_at?: Date;

  // Add this column to your entity!
  @DeleteDateColumn({
    // transformer: {
    //   to(value) {
    //     if (value) return moment.utc(value).toDate();
    //     return value;
    //   },
    //   from(value) {
    //     return value;
    //   },
    // },
  })
  deletedAt?: Date;
}
