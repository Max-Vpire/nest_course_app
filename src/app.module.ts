import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { UsersModel } from './users/users.model';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { RolesModel } from './roles/roles.model';
import { UserRoleModel } from './roles/user-role.model';
import { GalleryModule } from './gallery/gallery.module';
import { FilesModule } from './files/files.module';
import { GalleryModel } from './gallery/gallery.model';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve( __dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      autoLoadModels: true,
      database: process.env.DB_DATABASE,
      dialect: 'postgres',
      host: process.env.DB_HOST,
      models: [
        UsersModel,
        RolesModel,
        UserRoleModel,
        GalleryModel
      ],
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
    }),
    UsersModule,
    AuthModule,
    RolesModule,
    GalleryModule,
    FilesModule
  ],
})
export class AppModule {}
