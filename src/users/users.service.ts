import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UsersModel } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuid } from "uuid"
import { RolesService } from '../roles/roles.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UsersModel) private userRepository: typeof UsersModel,
    private roleService: RolesService
  ) { }

  async create(dto: CreateUserDto) {
    const user = await this.userRepository.create({...dto, id: uuid()});
    const role = await this.roleService.getByValue("USER")
    await user.$set('roles', [role.id])
    user.roles = [role]
    return user;
  }

  async GetAll() {
    return await this.userRepository.findAll({include: {all: true}})
  }
  async GetOne(idx: string) {
    return await this.userRepository.findOne({
      where: { id: idx },
      include: {all: true}
    })
  }

  async GetByEmail(email: string):Promise<UsersModel> {
    return this.userRepository.findOne({
      where: { email: email },
      include: {all: true}
    })
  }

  async Delete(idx: string) {
    return await this.userRepository.destroy({
      where: { id: idx }
    })
  }
}
