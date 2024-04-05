import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersModel } from '../users/users.model';
export declare class AuthService {
    private jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UsersService);
    Register(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    Login(userDto: AuthDto): Promise<{
        token: string;
    }>;
    private validateUser;
    generateToken(user: UsersModel): Promise<{
        token: string;
    }>;
    Profile(token: string): Promise<any>;
}
