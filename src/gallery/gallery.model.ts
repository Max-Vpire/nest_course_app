import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { UsersModel } from '../users/users.model';

@Table({tableName: 'gallery', updatedAt: false})
export class GalleryModel extends Model<GalleryModel> {
  @Column({
    primaryKey: true,
    type: DataType.TEXT,
    unique: true,
    allowNull: false
  })
  id: string

  @ForeignKey(() => UsersModel)
  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  userId: string

  @Column({
    type: DataType.TEXT,
    unique: true,
    allowNull: false
  })
  path: string

  @Column({
    type: DataType.TEXT,
  })
  description: string

  @BelongsTo(() => UsersModel)
  author: UsersModel
}