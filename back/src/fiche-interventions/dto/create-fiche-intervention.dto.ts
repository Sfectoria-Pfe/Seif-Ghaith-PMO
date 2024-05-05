import {ApiProperty} from '@nestjs/swagger';
import {IsDate, IsString} from 'class-validator';

export class CreateFicheInterventionDto {

    @ApiProperty()
    @IsString()
    status :string;
   
}
