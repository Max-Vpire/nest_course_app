import { Model } from 'sequelize-typescript';
export declare class UserRoleModel extends Model<UserRoleModel> {
    id: string;
    userId: string;
    roleId: string;
}
