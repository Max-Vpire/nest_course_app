import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
export declare class RolesController {
    private roleService;
    constructor(roleService: RolesService);
    GetAll(): Promise<import("./roles.model").RolesModel[]>;
    CreateRole(dto: CreateRoleDto): Promise<import("./roles.model").RolesModel>;
    GetById(idx: string): Promise<import("./roles.model").RolesModel>;
    GetByValue(value: string): Promise<import("./roles.model").RolesModel>;
    DeleteRole(id: string): Promise<number>;
}
