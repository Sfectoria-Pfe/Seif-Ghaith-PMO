import { ApiProperty } from '@nestjs/swagger';
import {IsDate,IsString  } from 'class-validator';

export class CreateClientDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  email: string;
  @ApiProperty()
  @IsString()
  password : string;
  @ApiProperty()
  @IsDate()
  createdAt :Date;
}
