import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Role } from '../../auth/roles/role.enum';

export class UserUpdateRequest {
  @ApiProperty()
  @IsNotEmpty()
  readonly id: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly firstName: string;

  @ApiProperty()
  readonly lastName: string;

  @ApiProperty({ isArray: true, enum: Role })
  readonly roles?: string[];

  @ApiProperty()
  readonly description: string;

  @ApiProperty({})
  readonly previousWorkplace?: any;
}