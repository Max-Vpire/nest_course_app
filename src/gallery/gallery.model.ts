import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({tableName: 'gallery', updatedAt: false})
export class GalleryModel extends Model<GalleryModel> {
  @Column({
    primaryKey: true,
    type: DataType.TEXT,

  })
  id: string
}