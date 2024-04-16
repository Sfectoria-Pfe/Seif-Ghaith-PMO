import {ApiProperty} from '@nestjs/swagger';
import { Role } from '@prisma/client';
import {IsString} from 'class-validator';

export class CreateEmployeeDto {
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
    email:string;
    @ApiProperty()
    @IsString()
    role: Role;
    
}
