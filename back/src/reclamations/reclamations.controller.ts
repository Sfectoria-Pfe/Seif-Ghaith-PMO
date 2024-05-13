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
import { ReclamationsService } from './reclamations.service';
import { CreateReclamationDto } from './dto/create-reclamation.dto';
import { UpdateReclamationDto } from './dto/update-reclamation.dto';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';
@ApiTags('reclamatioms')
@Controller('reclamations')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class ReclamationsController {
  constructor(private readonly reclamationsService: ReclamationsService) {}
  @Roles(Role.Admin, Role.Manager, Role.Receptionniste)
  @Post()
  create(@Body() createReclamationDto: CreateReclamationDto) {
    return this.reclamationsService.create(createReclamationDto);
  }

  @Roles(Role.Admin, Role.Manager, Role.Receptionniste)
  @Get()
  findAll() {
    return this.reclamationsService.findAll();
  }
  @Roles(Role.Admin, Role.Manager, Role.Receptionniste)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reclamationsService.findOne(+id);
  }
  @Roles(Role.Admin, Role.Manager, Role.Receptionniste)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReclamationDto: UpdateReclamationDto,
  ) {
    return this.reclamationsService.update(+id, updateReclamationDto);
  }
  @Roles(Role.Admin, Role.Manager, Role.Receptionniste)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reclamationsService.remove(+id);
  }
}
