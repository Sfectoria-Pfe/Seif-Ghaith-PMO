import { PartialType } from '@nestjs/swagger';
import { CreateFicheinterventionDetailDto } from './create-ficheintervention-detail.dto';

export class UpdateFicheinterventionDetailDto extends PartialType(CreateFicheinterventionDetailDto) {}
