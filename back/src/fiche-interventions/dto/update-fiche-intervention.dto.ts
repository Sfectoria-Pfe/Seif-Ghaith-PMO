import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFicheInterventionDto } from './create-fiche-intervention.dto';
import { IsDate, IsString } from 'class-validator';

export class UpdateFicheInterventionDto extends PartialType(CreateFicheInterventionDto) {
    @ApiProperty()
    @IsString()
    title? :string;
    @ApiProperty()
    @IsString()
    rapport? :string;
    @ApiProperty()
    @IsString()
    description? :string;
    @ApiProperty()
    @IsString()
    status ?:string;
    @ApiProperty()
    @IsDate()
    date? :Date;
    @ApiProperty()
    @IsDate()
    createdAt? :Date;
}
