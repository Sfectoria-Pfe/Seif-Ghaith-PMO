import {ApiProperty} from '@nestjs/swagger';
import { Status } from '@prisma/client';
import {IsBoolean, IsDate, IsString} from 'class-validator';
export class CreateEtapeDto {
    @ApiProperty()
    @IsString()
    title :string;

    @ApiProperty()
    @IsString()
    rapport :string;
    @ApiProperty()
    @IsString()
    description :string;
    @ApiProperty()
    @IsString()
    status :Status;
    @ApiProperty()
    @IsString()
    type :string;
    @ApiProperty()
    @IsDate()
    date : Date;
    @ApiProperty()
    @IsDate()
    createdAt :Date;


}
