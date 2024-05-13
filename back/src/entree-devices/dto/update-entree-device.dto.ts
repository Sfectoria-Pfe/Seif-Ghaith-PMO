import { PartialType,ApiProperty } from '@nestjs/swagger';
import { CreateEntreeDeviceDto } from './create-entree-device.dto';
import {IsString} from 'class-validator';
export class UpdateEntreeDeviceDto extends PartialType(CreateEntreeDeviceDto) {
}
