import { UsersModel } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';
export declare class UsersService {
    private userRepository;
    private roleService;
    constructor(userRepository: typeof UsersModel, roleService: RolesService);
    create(dto: CreateUserDto): Promise<UsersModel>;
    GetAll(): Promise<UsersModel[]>;
    GetOne(idx: string): Promise<UsersModel>;
    GetByEmail(email: string): Promise<UsersModel>;
    Delete(idx: string): Promise<number>;
}
