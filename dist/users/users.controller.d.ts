import { UsersService } from './users.service';
import { UsersModel } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    GetAll(): Promise<UsersModel[]>;
    Create(dto: CreateUserDto): Promise<UsersModel>;
    GetOne(idx: string): Promise<UsersModel>;
    Delete(idx: string): Promise<number>;
}
