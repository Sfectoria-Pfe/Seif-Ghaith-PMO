import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateClientDto } from './create-client.dto';
import { IsString } from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {
    @ApiProperty()
    @IsString()
    username: string;
    @ApiProperty()
    @IsString()
    email: string;
    @ApiProperty()
    @IsString()
    pass: string;
}
