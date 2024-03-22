import { PartialType } from '@nestjs/swagger';
import { CreateEntreeDeviceDto } from './create-entree-device.dto';

export class UpdateEntreeDeviceDto extends PartialType(CreateEntreeDeviceDto) {}
