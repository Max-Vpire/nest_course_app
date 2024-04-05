import { Model } from 'sequelize-typescript';
import { RoleDto } from './dto/role.dto';
import { UsersModel } from '../users/users.model';
interface CreateRoleAtts {
    id: string;
    value: string;
    description: string;
}
export declare class RolesModel extends Model<RoleDto | CreateRoleAtts> {
    id: string;
    value: string;
    description: string;
    users: UsersModel[];
}
export {};
