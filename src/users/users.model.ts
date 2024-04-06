import { BelongsToMany, Column, DataType, HasMany, Model, ModelCtor, Table } from 'sequelize-typescript';
import { UserDto } from './dto/user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { UserRoleModel } from '../roles/user-role.model';
import { RolesModel } from '../roles/roles.model';
import { GalleryModel } from '../gallery/gallery.model';

interface CreateUserAttrs {
   id: string,
   name: string,
   email: string,
   password: string,
}
@Table({ tableName: 'users', createdAt: false, updatedAt: false })
export class UsersModel extends Model<UserDto, CreateUserAttrs>{
  @ApiProperty({example: '1', description: 'id'})
  @Column({
    type: DataType.TEXT,
    allowNull:false,
    unique: true,
    primaryKey: true
  })
   id: string;

  @ApiProperty({example: 'somebody', description: 'name'})
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  name: string;

  @ApiProperty({example: 'somebody@gmail.com', description: 'email'})
  @Column({
    type: DataType.TEXT,
    allowNull: false,
    unique: true
  })
  email: string;

  @ApiProperty({example: '12345', description: 'password'})
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  password: string;

  @BelongsToMany(() => RolesModel, () => UserRoleModel)
  roles: RolesModel[];

  @HasMany(() => GalleryModel)
  gallery: GalleryModel[];

}