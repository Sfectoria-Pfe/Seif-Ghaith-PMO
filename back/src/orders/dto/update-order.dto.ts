import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { IsDate, IsString } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  
}
