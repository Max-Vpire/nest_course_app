import { AuthDto } from './dto/auth.dto';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class AuthController {
    private userService;
    private authService;
    constructor(userService: UsersService, authService: AuthService);
    Login(dto: AuthDto): Promise<{
        token: string;
    }>;
    Register(dto: CreateUserDto): Promise<{
        token: string;
    }>;
    Profile(req: any): Promise<any>;
}
