import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntreeDevicesService } from './entree-devices.service';
import { CreateEntreeDeviceDto } from './dto/create-entree-device.dto';
import { UpdateEntreeDeviceDto } from './dto/update-entree-device.dto';

@Controller('entree-devices')
export class EntreeDevicesController {
  constructor(private readonly entreeDevicesService: EntreeDevicesService) {}

  @Post()
  create(@Body() createEntreeDeviceDto: CreateEntreeDeviceDto) {
    return this.entreeDevicesService.create(createEntreeDeviceDto);
  }

  @Get()
  findAll() {
    return this.entreeDevicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entreeDevicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntreeDeviceDto: UpdateEntreeDeviceDto) {
    return this.entreeDevicesService.update(+id, updateEntreeDeviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entreeDevicesService.remove(+id);
  }
}