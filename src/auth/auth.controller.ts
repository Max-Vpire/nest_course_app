import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { ApiHeaders, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthDto } from './dto/auth.dto';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { TokenDto } from './dto/token.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private userService: UsersService,
    private authService: AuthService
  ) {}
  @ApiOperation({summary: 'Login'})
  @ApiResponse({status: 200 || 409, type: TokenDto})
  @Post('/login')
    Login(@Body() dto: AuthDto) {
      return this.authService.Login(dto)
  }

  @ApiOperation({summary: 'Register'})
  @ApiResponse({status: 201 || 409, type: TokenDto})
  @Post('/register')
  Register(@Body() dto: CreateUserDto) {
    return this.authService.Register(dto)
  }

  @ApiOperation({summary: 'Profile'})
  // @ApiResponse({})
  @Get('/profile')
  Profile(@Request() req: any) {
    const token = req.headers.authorization;
    return this.authService.Profile(token)
  }
}
