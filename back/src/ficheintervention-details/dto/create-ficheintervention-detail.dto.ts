import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFicheinterventionDetailDto {
  @ApiProperty()
  ficheInterventionId: number;
  title: string;
  rapport: string;
  description: string;
}
