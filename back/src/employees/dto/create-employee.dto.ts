import {ApiProperty} from '@nestjs/swagger';
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
    password:string;
    @ApiProperty()
    @IsString()
    role: string;
}
