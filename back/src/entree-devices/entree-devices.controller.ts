import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EntreeDevicesService } from './entree-devices.service';
import { CreateEntreeDeviceDto } from './dto/create-entree-device.dto';
import { UpdateEntreeDeviceDto } from './dto/update-entree-device.dto';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('entree--device')
@Controller('entree-devices')
@UseGuards(AuthGuard('jwt'),RolesGuard)
export class EntreeDevicesController {
  constructor(private readonly entreeDevicesService: EntreeDevicesService) {}
 
  @Roles(Role.Admin,Role.Manager,Role.Receptionniste,Role.Technicien)
  @Post()
  create(@Body() createEntreeDeviceDto: CreateEntreeDeviceDto) {
    return this.entreeDevicesService.create(createEntreeDeviceDto);
  }
  @Roles(Role.Admin,Role.Manager,Role.Receptionniste,Role.Technicien)
  @Get()
  findAll() {
    return this.entreeDevicesService.findAll();
  }

  @Roles(Role.Admin,Role.Manager,Role.Receptionniste,Role.Technicien)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entreeDevicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntreeDeviceDto: UpdateEntreeDeviceDto) {
    return this.entreeDevicesService.update(+id, updateEntreeDeviceDto);
  }
  
  @Roles(Role.Admin,Role.Manager,Role.Receptionniste,Role.Technicien)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entreeDevicesService.remove(+id);
  }
}
