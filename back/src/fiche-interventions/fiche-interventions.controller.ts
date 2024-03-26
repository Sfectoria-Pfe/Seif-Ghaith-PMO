import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FicheInterventionsService } from './fiche-interventions.service';
import { CreateFicheInterventionDto } from './dto/create-fiche-intervention.dto';
import { UpdateFicheInterventionDto } from './dto/update-fiche-intervention.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('fiche--')

@Controller('fiche-interventions')
export class FicheInterventionsController {
  constructor(private readonly ficheInterventionsService: FicheInterventionsService) {}

  @Post()
  create(@Body() createFicheInterventionDto: CreateFicheInterventionDto) {
    return this.ficheInterventionsService.create(createFicheInterventionDto);
  }

  @Get()
  findAll() {
    return this.ficheInterventionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ficheInterventionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFicheInterventionDto: UpdateFicheInterventionDto) {
    return this.ficheInterventionsService.update(+id, updateFicheInterventionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ficheInterventionsService.remove(+id);
  }
}
