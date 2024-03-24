import { ApiProperty } from "@nestjs/swagger"
import {IsString,IsDate, IsNumber} from 'class-validator';

export class CreateReclamationDto {
    @ApiProperty()
    @IsString()
    titel:string;
    @ApiProperty()
    @IsString()
    description:string;
    @ApiProperty()
    @IsDate()
    createdAt :Date;
    @ApiProperty()
    @IsNumber()
    clientId :number

}
