import { ApiProperty } from '@nestjs/swagger';
import { StatusFiche } from '@prisma/client';
import { IsDate, IsString } from 'class-validator';

export class CreateFicheInterventionDto {
  orderReparationId: number;

  status: StatusFiche;
}
