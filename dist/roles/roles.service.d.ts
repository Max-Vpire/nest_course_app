import { RolesModel } from './roles.model';
import { CreateRoleDto } from './dto/create-role.dto';
export declare class RolesService {
    private rolesRepository;
    constructor(rolesRepository: typeof RolesModel);
    createRoles(dto: CreateRoleDto): Promise<RolesModel>;
    getRoles(): Promise<RolesModel[]>;
    getOne(idx: string): Promise<RolesModel>;
    getByValue(value: string): Promise<RolesModel>;
    deleteRole(idx: string): Promise<number>;
}
