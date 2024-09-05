import { seeder } from 'nestjs-seeder';
import { ConfigModule } from '@nestjs/config';
import typeormConfig from 'src/database/config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseProvider } from '../orm/database.provider.ts';
import { UserEntity } from '../entities/user.entity.js';
import { CategoryEntity } from '../entities/category.entity.js';
import { CategorySeeder } from './category.seed.js';

seeder({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig],
      envFilePath: [`.env.${process.env.NODE_ENV}`, `env`],
    }),
    DatabaseProvider,
    TypeOrmModule.forFeature([UserEntity, CategoryEntity]),
  ],
}).run([CategorySeeder]);
