import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { RoleDto } from './dto/role.dto';
import { UserRoleModel } from './user-role.model';
import { UsersModel } from '../users/users.model';

interface CreateRoleAtts {
  id: string,
  value: string,
  description: string
}
@Table({tableName: 'roles', createdAt: false, updatedAt: false})
export class RolesModel extends Model<RoleDto| CreateRoleAtts> {
  @Column({
    type: DataType.TEXT,
    unique: true,
    allowNull: false,
    primaryKey: true
  })
  id: string

  @Column({
    type: DataType.TEXT,
    unique: true,
    allowNull: false
  })
  value: string

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  description: string

  @BelongsToMany(() => UsersModel, () => UserRoleModel)
  users: UsersModel[];
}