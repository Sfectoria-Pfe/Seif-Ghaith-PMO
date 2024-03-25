import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { IsDate, IsString } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    @ApiProperty()
    @IsString()
    name :string;
    @ApiProperty()
    @IsString()
    description :string;
    @ApiProperty()
    @IsDate()
    createdAt :Date;
    @ApiProperty()
    @IsString()
    confirm :string;
}
