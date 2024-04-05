import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({example: 'USER', description: 'value'})
  readonly value: string
  @ApiProperty({example: 'clients', description: 'description'})
  readonly description: string
}