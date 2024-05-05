import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderreparationsService } from './orderreparations.service';
import { CreateOrderreparationDto } from './dto/create-orderreparation.dto';
import { UpdateOrderreparationDto } from './dto/update-orderreparation.dto';

@Controller('orderreparations')
export class OrderreparationsController {
  constructor(private readonly orderreparationsService: OrderreparationsService) {}

  @Post()
  create(@Body() createOrderreparationDto: CreateOrderreparationDto) {
    return this.orderreparationsService.create(createOrderreparationDto);
  }

  @Get()
  findAll() {
    return this.orderreparationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderreparationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderreparationDto: UpdateOrderreparationDto) {
    return this.orderreparationsService.update(+id, updateOrderreparationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderreparationsService.remove(+id);
  }
}
