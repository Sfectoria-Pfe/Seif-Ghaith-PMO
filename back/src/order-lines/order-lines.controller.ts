import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { OrderLinesService } from './order-lines.service';
import { CreateOrderLineDto } from './dto/create-order-line.dto';
import { UpdateOrderLineDto } from './dto/update-order-line.dto';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';

@ApiTags('order-linee')
@Controller('order-lines')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class OrderLinesController {
  constructor(private readonly orderLinesService: OrderLinesService) {}
  @Roles(Role.Admin, Role.Manager, Role.Receptionniste)
  @Post()
  create(@Body() createOrderLineDto: CreateOrderLineDto) {
    return this.orderLinesService.create(createOrderLineDto);
  }
  @Roles(Role.Admin, Role.Manager, Role.Receptionniste)
  @Get()
  findAll() {
    return this.orderLinesService.findAll();
  }
  @Roles(Role.Admin, Role.Manager, Role.Receptionniste)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderLinesService.findOne(+id);
  }
  @Roles(Role.Admin, Role.Manager, Role.Receptionniste)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrderLineDto: UpdateOrderLineDto,
  ) {
    return this.orderLinesService.update(+id, updateOrderLineDto);
  }
  @Roles(Role.Admin, Role.Manager, Role.Receptionniste)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderLinesService.remove(+id);
  }
}
