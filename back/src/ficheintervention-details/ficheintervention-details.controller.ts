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
import { FicheinterventionDetailsService } from './ficheintervention-details.service';
import { CreateFicheinterventionDetailDto } from './dto/create-ficheintervention-detail.dto';
import { UpdateFicheinterventionDetailDto } from './dto/update-ficheintervention-detail.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';

@Controller('ficheintervention-details')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class FicheinterventionDetailsController {
  constructor(
    private readonly ficheinterventionDetailsService: FicheinterventionDetailsService,
  ) {}
  @Roles(Role.Admin, Role.Manager)
  @Post()
  create(
    @Body() createFicheinterventionDetailDto: CreateFicheinterventionDetailDto,
  ) {
    return this.ficheinterventionDetailsService.create(
      createFicheinterventionDetailDto,
    );
  }
  @Roles(Role.Admin, Role.Manager, Role.Receptionniste)
  @Get()
  findAll() {
    return this.ficheinterventionDetailsService.findAll();
  }
  @Roles(Role.Admin, Role.Manager, Role.Receptionniste)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ficheinterventionDetailsService.findOne(+id);
  }
  @Roles(Role.Admin, Role.Manager)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFicheinterventionDetailDto: UpdateFicheinterventionDetailDto,
  ) {
    return this.ficheinterventionDetailsService.update(
      +id,
      updateFicheinterventionDetailDto,
    );
  }
  @Roles(Role.Admin, Role.Manager)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ficheinterventionDetailsService.remove(+id);
  }
}
