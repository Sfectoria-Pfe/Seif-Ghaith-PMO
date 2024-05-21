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
import { EtapesService } from './etapes.service';
import { CreateEtapeDto } from './dto/create-etape.dto';
import { UpdateEtapeDto } from './dto/update-etape.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';
@ApiTags('etaps')
@Controller('etapes')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class EtapesController {
  constructor(private readonly etapesService: EtapesService) {}
  @Roles(Role.Admin, Role.Manager, Role.Technicien)
  @Post()
  create(@Body() createEtapeDto: CreateEtapeDto) {
    return this.etapesService.create(createEtapeDto);
  }
  @Roles(Role.Admin, Role.Manager, Role.Technicien)
  @Get()
  findAll() {
    return this.etapesService.findAll();
  }
  @Roles(Role.Admin, Role.Manager, Role.Technicien)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.etapesService.findOne(+id);
  }
  @Roles(Role.Admin, Role.Manager, Role.Technicien)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEtapeDto: UpdateEtapeDto) {
    return this.etapesService.update(+id, updateEtapeDto);
  }
  @Roles(Role.Admin, Role.Manager, Role.Technicien)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.etapesService.remove(+id);
  }
}
