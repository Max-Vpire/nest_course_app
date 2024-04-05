import { ApiProperty } from '@nestjs/swagger';

export class RoleDto {
  @ApiProperty({example: '78783-34232-23423', description: 'id'})
  readonly id: string
  @ApiProperty({example: 'USER', description: 'value'})
  readonly value: string
  @ApiProperty({example: 'client', description: 'description'})
  readonly description: string
}