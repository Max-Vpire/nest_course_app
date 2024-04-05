import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesModel } from './roles.model';
import { RoleDto } from './dto/role.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class RolesService {
  constructor(@InjectModel(RolesModel) private rolesRepository: typeof RolesModel) { }

  async createRoles(dto: CreateRoleDto) {
    return await this.rolesRepository.create({...dto, id: uuid()})
  }

  async getRoles() {
    return await this.rolesRepository.findAll()
  }

  async getOne(idx: string) {
    return await this.rolesRepository.findOne({ where: { id: idx } })
  }

  async getByValue(value: string) {
    return await this.rolesRepository.findOne({ where: { value: value } })
  }

  async deleteRole(idx: string) {
    return await this.rolesRepository.destroy({ where: { id: idx } })
  }

}
