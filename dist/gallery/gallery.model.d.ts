import { Model } from 'sequelize-typescript';
import { UsersModel } from '../users/users.model';
export declare class GalleryModel extends Model<GalleryModel> {
    id: string;
    userId: string;
    path: string;
    description: string;
    author: UsersModel;
}
