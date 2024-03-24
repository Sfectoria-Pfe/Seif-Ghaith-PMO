import { IsDate,IsString } from "class-validator";
import {ApiProperty} from '@nestjs/swagger';

export class CreateOrderDto {
    @ApiProperty()
    @IsString()
    name :string;
    @ApiProperty()
    @IsString()
    description :string;
    @ApiProperty()
    @IsDate()
    createdAt :Date;
    @ApiProperty()
    @IsString()
    confirm :string;
}
