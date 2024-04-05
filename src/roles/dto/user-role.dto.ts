import { ApiProperty } from '@nestjs/swagger';

export class UserRoleDto {
  @ApiProperty({example: 'id', description: 'id'})
  readonly id: string
  @ApiProperty({example: 'user-id', description: 'userId'})
  readonly userId: string
  @ApiProperty({example: 'role-id', description: 'roleId'})
  readonly roleId: string
}