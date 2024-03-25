import { PartialType,ApiProperty } from '@nestjs/swagger';
import { CreateEntreeDeviceDto } from './create-entree-device.dto';
import {IsString} from 'class-validator';
export class UpdateEntreeDeviceDto extends PartialType(CreateEntreeDeviceDto) {
    @ApiProperty()
    @IsString()
    title :string;
    @ApiProperty()
    @IsString()
    rapport :string;
    @ApiProperty()
    @IsString()
    statues :string;
    @ApiProperty()
    @IsString()
   description :string;
}
