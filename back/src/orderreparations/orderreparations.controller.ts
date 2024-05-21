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
import { OrderreparationsService } from './orderreparations.service';
import { CreateOrderreparationDto } from './dto/create-orderreparation.dto';
import { UpdateOrderreparationDto } from './dto/update-orderreparation.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';

@Controller('orderreparations')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class OrderreparationsController {
  constructor(
    private readonly orderreparationsService: OrderreparationsService,
  ) {}
  @Roles(Role.Admin, Role.Manager, Role.Technicien,Role.Receptionniste)
  @Post()
  create(@Body() createOrderreparationDto: CreateOrderreparationDto) {
    return this.orderreparationsService.create(createOrderreparationDto);
  } 	
  @Roles(Role.Admin, Role.Manager, Role.Technicien,Role.Receptionniste)
  @Get()
  findAll() {
    return this.orderreparationsService.findAll();
  }
  @Roles(Role.Admin, Role.Manager, Role.Technicien,Role.Receptionniste)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderreparationsService.findOne(+id);
  }
  @Roles(Role.Admin, Role.Manager, Role.Technicien,Role.Receptionniste)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrderreparationDto: UpdateOrderreparationDto,
  ) {
    return this.orderreparationsService.update(+id, updateOrderreparationDto);
  }
  @Roles(Role.Admin, Role.Manager, Role.Technicien,Role.Receptionniste)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderreparationsService.remove(+id);
  }
}
