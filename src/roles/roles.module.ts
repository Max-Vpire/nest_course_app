import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolesModel } from './roles.model';
import { UserRoleModel } from './user-role.model';

@Module({
  imports: [
    SequelizeModule.forFeature([RolesModel, RolesModel, UserRoleModel])
  ],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService]
})
export class RolesModule {}
