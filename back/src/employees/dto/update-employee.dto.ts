import { PartialType,ApiProperty} from '@nestjs/swagger';
import { CreateEmployeeDto } from './create-employee.dto';
import {IsString} from 'class-validator';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
    @ApiProperty()
    @IsString()
    name:string;
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
