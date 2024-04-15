import { ApiProperty } from '@nestjs/swagger';
import {IsDate,IsString  } from 'class-validator';

export class CreateClientDto {
  @ApiProperty()
  @IsString()
  first_name:string;
  @ApiProperty()
  @IsString()
  last_name:string;
  @ApiProperty()
  @IsString()
  photo:string;
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
