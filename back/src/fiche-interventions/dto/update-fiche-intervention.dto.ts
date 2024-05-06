import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFicheInterventionDto } from './create-fiche-intervention.dto';
import { IsDate, IsString } from 'class-validator';

export class UpdateFicheInterventionDto extends PartialType(CreateFicheInterventionDto) {
   
}
