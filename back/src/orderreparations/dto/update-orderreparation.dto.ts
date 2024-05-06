import { PartialType } from '@nestjs/swagger';
import { CreateOrderreparationDto } from './create-orderreparation.dto';

export class UpdateOrderreparationDto extends PartialType(CreateOrderreparationDto) {}
