import { Injectable } from '@nestjs/common';
import { CreateFicheInterventionDto } from './dto/create-fiche-intervention.dto';
import { UpdateFicheInterventionDto } from './dto/update-fiche-intervention.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FicheInterventionsService {
  constructor(private prisma: PrismaService) {}
  create(createFicheInterventionDto: CreateFicheInterventionDto) {
    return this.prisma.fiche_intervention.create({data:createFicheInterventionDto})
  }

  findAll() {
    return this.prisma.fiche_intervention.findMany();
  }

  findOne(id: number) {
    return this.prisma.fiche_intervention.findUnique({ where: { id } });
  }

  update(id: number, updateFicheInterventionDto: UpdateFicheInterventionDto) {
    return this.prisma.fiche_intervention.update({
      where: { id },
      data :updateFicheInterventionDto,
    });;
  }

  remove(id: number) {
    return  this.prisma.fiche_intervention.delete({ where: { id } });
  }
}
