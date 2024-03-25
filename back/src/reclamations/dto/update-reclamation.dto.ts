import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateReclamationDto } from './create-reclamation.dto';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class UpdateReclamationDto extends PartialType(CreateReclamationDto) {
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
