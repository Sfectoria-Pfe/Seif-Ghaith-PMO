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
import { FicheInterventionsService } from './fiche-interventions.service';
import { CreateFicheInterventionDto } from './dto/create-fiche-intervention.dto';
import { UpdateFicheInterventionDto } from './dto/update-fiche-intervention.dto';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';

@ApiTags('fiche--')
@Controller('fiche-interventions')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class FicheInterventionsController {
  constructor(
    private readonly ficheInterventionsService: FicheInterventionsService,
  ) {}
  @Roles(Role.Admin, Role.Manager)
  @Post()
  create(@Body() createFicheInterventionDto: CreateFicheInterventionDto) {
    return this.ficheInterventionsService.create(createFicheInterventionDto);
  }
  @Roles(Role.Admin, Role.Manager, Role.Receptionniste)
  @Get()
  findAll() {
    return this.ficheInterventionsService.findAll();
  }
  @Roles(Role.Admin, Role.Manager, Role.Receptionniste)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ficheInterventionsService.findOne(+id);
  }

  @Roles(Role.Admin, Role.Manager)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFicheInterventionDto: UpdateFicheInterventionDto,
  ) {
    return this.ficheInterventionsService.update(
      +id,
      updateFicheInterventionDto,
    );
  }
  @Roles(Role.Admin, Role.Manager)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ficheInterventionsService.remove(+id);
  }
}
