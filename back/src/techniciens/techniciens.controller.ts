import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TechniciensService } from './techniciens.service';
import { CreateTechnicienDto } from './dto/create-technicien.dto';
import { UpdateTechnicienDto } from './dto/update-technicien.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("techniciens")
@Controller('techniciens')
export class TechniciensController {
  constructor(private readonly techniciensService: TechniciensService) {}

  @Post()
  create(@Body() createTechnicienDto: CreateTechnicienDto) {
    return this.techniciensService.create(createTechnicienDto);
  }

  @Get()
  findAll() {
    return this.techniciensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.techniciensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTechnicienDto: UpdateTechnicienDto) {
    return this.techniciensService.update(+id, updateTechnicienDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.techniciensService.remove(+id);
  }
}
