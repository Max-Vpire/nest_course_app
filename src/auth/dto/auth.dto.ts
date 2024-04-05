import { ApiProperty, ApiTags } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty({example: 'somebody@gmail.com', description: 'email'})
  readonly email: string
  @ApiProperty({example: '12345', description: 'password'})
  readonly password: string
}