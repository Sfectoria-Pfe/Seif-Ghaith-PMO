import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFicheInterventionDto } from './create-fiche-intervention.dto';
import { IsDate, IsString } from 'class-validator';
import { FicheInterventionDetails, Status, StatusFiche } from '@prisma/client';

export class UpdateFicheInterventionDto extends PartialType(CreateFicheInterventionDto) {
   status:StatusFiche
   details:FicheInterventionDetails[]
}
