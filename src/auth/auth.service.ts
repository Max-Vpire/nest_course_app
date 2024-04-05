import { BadRequestException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserDto } from '../users/dto/user.dto';
import * as bcrypt from 'bcrypt'
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersModel } from '../users/users.model';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService
    ) {}

  async Register(userDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(userDto.password, 10)
    const userAuth: CreateUserDto = {
      name: userDto.name,
      email: userDto.email,
      password: hashedPassword
    }
    const candidate = await this.userService.GetByEmail(userDto.email);
    if (candidate) {
      throw new HttpException('A user with this email exists', HttpStatus.BAD_REQUEST);
    }
    const user = await this.userService.create(userAuth)
    return this.generateToken(user)
  }
  async Login(userDto: AuthDto):Promise<{token: string}> {
    const user:UsersModel = await this.validateUser(userDto)
    return this.generateToken(user)
  }
  private async validateUser(userDto: AuthDto) {
    const user = await this.userService.GetByEmail(userDto.email);
    if (user) {
      const passwordEquals = await bcrypt.compare(userDto.password, user.password);
      if(passwordEquals) {
        return user;
      }
      throw new UnauthorizedException({message: 'The email or password not found!'})
    }
      throw new UnauthorizedException({message: 'The email or password not found!'})
  }

   async generateToken(user: UsersModel) {
    const payload = {
      email: user.email,
      name: user.name,
      id: user.id,
      roles: user.roles
    }
    return {
      token: this.jwtService.sign(payload)
    }
  }
  async Profile(token: string) {
    return this.jwtService.verifyAsync(token)
  }
}
