import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersModel } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { Roles } from '../auth/guard/roles-auth.decorator';
import { RolesGuard } from '../auth/guard/roles.guard';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) { }
 @ApiOperation({summary: 'Get all users'})
 @ApiResponse({status: 200, type: [UsersModel]})
 @Roles("ADMIN")
 @UseGuards(RolesGuard)
 @Get()
  GetAll() {
     return this.userService.GetAll()
  }

 @ApiOperation({summary: 'Create User'})
 @ApiResponse({status: 201, type: UsersModel})
 @Post()
  Create(@Body() dto: CreateUserDto) {
     return this.userService.create(dto)
 }

 @ApiOperation({summary: 'Get user by ID'})
 @ApiResponse({status: 200, type: UsersModel})
 @Get('/:id')
  GetOne(@Param('id') idx: string) {
     return this.userService.GetOne(idx)
 }

 @ApiOperation({summary: 'Delete User'})
 @ApiResponse({status: 200})
 @Delete('/:id')
  Delete(@Param('id') idx: string) {
     return this.userService.Delete(idx);
 }
}