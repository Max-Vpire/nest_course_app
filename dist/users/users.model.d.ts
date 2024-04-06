import { Model } from 'sequelize-typescript';
import { UserDto } from './dto/user.dto';
import { RolesModel } from '../roles/roles.model';
import { GalleryModel } from '../gallery/gallery.model';
interface CreateUserAttrs {
    id: string;
    name: string;
    email: string;
    password: string;
}
export declare class UsersModel extends Model<UserDto, CreateUserAttrs> {
    id: string;
    name: string;
    email: string;
    password: string;
    roles: RolesModel[];
    gallery: GalleryModel[];
}
export {};
