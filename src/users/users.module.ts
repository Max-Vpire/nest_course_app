import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModel } from './users.model';
import { RolesModule } from '../roles/roles.module';
import { UserRoleModel } from '../roles/user-role.model';
import { RolesModel } from '../roles/roles.model';
import { GalleryModel } from '../gallery/gallery.model';

@Module({
  imports: [
    SequelizeModule.forFeature([UsersModel, RolesModel, UserRoleModel, GalleryModel]),
    RolesModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
