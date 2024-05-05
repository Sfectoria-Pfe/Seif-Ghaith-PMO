import { Injectable } from '@nestjs/common';
import { CreateFicheInterventionDto } from './dto/create-fiche-intervention.dto';
import { UpdateFicheInterventionDto } from './dto/update-fiche-intervention.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FicheInterventionsService {
  constructor(private prisma: PrismaService) {}
  create(createFicheInterventionDto: CreateFicheInterventionDto) {
    return this.prisma.ficheIntervention.create({data:createFicheInterventionDto})
  }

  findAll() {
    return this.prisma.ficheIntervention.findMany();
  }

  findOne(id: number) {
    return this.prisma.ficheIntervention.findUnique({ where: { id } });
  }

  update(id: number, updateFicheInterventionDto: UpdateFicheInterventionDto) {
    return this.prisma.ficheIntervention.update({
      where: { id },
      data :updateFicheInterventionDto,
    });;
  }

  remove(id: number) {
    return  this.prisma.ficheIntervention.delete({ where: { id } });
  }
}
