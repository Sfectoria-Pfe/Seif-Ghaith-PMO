import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FicheinterventionDetailsService } from './ficheintervention-details.service';
import { CreateFicheinterventionDetailDto } from './dto/create-ficheintervention-detail.dto';
import { UpdateFicheinterventionDetailDto } from './dto/update-ficheintervention-detail.dto';

@Controller('ficheintervention-details')
export class FicheinterventionDetailsController {
  constructor(private readonly ficheinterventionDetailsService: FicheinterventionDetailsService) {}

  @Post()
  create(@Body() createFicheinterventionDetailDto: CreateFicheinterventionDetailDto) {
    return this.ficheinterventionDetailsService.create(createFicheinterventionDetailDto);
  }

  @Get()
  findAll() {
    return this.ficheinterventionDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ficheinterventionDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFicheinterventionDetailDto: UpdateFicheinterventionDetailDto) {
    return this.ficheinterventionDetailsService.update(+id, updateFicheinterventionDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ficheinterventionDetailsService.remove(+id);
  }
}
