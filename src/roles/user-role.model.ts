import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { UserRoleDto } from './dto/user-role.dto';
import { UsersModel } from '../users/users.model';
import { RolesModel } from './roles.model';


@Table({tableName: 'user_role', createdAt: false, updatedAt: false})
export class UserRoleModel extends Model<UserRoleModel>{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
  })
  id: string

  @ForeignKey(() => UsersModel)
  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  userId: string

  @ForeignKey(() => RolesModel)
  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  roleId: string
}