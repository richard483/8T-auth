import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RatingCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly userId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly recruiterUserId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly ratingOf10: number;
}
