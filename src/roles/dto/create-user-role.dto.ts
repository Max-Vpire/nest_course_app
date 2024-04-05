import { ApiProperty, ApiResponse } from '@nestjs/swagger';
import { RoleDto } from './role.dto';

export class CreateUserRoleDto {
  @ApiProperty({example: 'user-id', description: 'userId'})
  readonly userId: string
  @ApiProperty({example: 'role-id', description: 'roleId'})
  readonly roleId: string
}