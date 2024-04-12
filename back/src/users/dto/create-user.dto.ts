import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsString} from 'class-validator';
export class CreateUserDto {
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
    password :string;
    @ApiProperty()
    @IsEmail()
    email :string;

}
