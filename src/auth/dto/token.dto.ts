import { ApiProperty } from '@nestjs/swagger';

export class TokenDto {
@ApiProperty({example: 'token', description: 'token'})
  readonly token: string
}