import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersModel } from '../users/users.model';
import { UserDto } from '../users/dto/user.dto';
import { RoleDto } from './dto/role.dto';
import { Roles } from '../auth/guard/roles-auth.decorator';
import { RolesGuard } from '../auth/guard/roles.guard';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) { }

  @ApiOperation({summary: 'Get all roles'})
  @ApiResponse({status: 200, type: [RoleDto]})
  @Get()
    GetAll() {
      return this.roleService.getRoles()
    }


  @ApiOperation({summary: 'Create role'})
  @ApiResponse({status: 201, type: RoleDto})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
    CreateRole(@Body() dto: CreateRoleDto) {
      return this.roleService.createRoles(dto)
  }


  @ApiOperation({summary: 'Get role by ID'})
  @ApiResponse({status: 200, type: RoleDto})
  @Get('id/:id')
    GetById(@Param('id') idx: string) {
      return this.roleService.getOne(idx)
    }

  @ApiOperation({summary: 'Get role by value'})
  @ApiResponse({status: 200, type: RoleDto})
  @Post('value')
    GetByValue(@Body('value') value: string) {
      return this.roleService.getByValue(value)
  }

  @ApiOperation({summary: 'Delete role'})
  @Delete('/:id')
    DeleteRole(@Param('id') id: string) {
      return this.roleService.deleteRole(id)
  }
}
