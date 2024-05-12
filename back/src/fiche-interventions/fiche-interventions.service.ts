import { Injectable } from '@nestjs/common';
import { CreateFicheInterventionDto } from './dto/create-fiche-intervention.dto';
import { UpdateFicheInterventionDto } from './dto/update-fiche-intervention.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FicheInterventionsService {
  constructor(private prisma: PrismaService) {}
  async create(createFicheInterventionDto: CreateFicheInterventionDto) {
    const etapes = await this.prisma.etape.findMany({
      where: {
        orderReparationId: createFicheInterventionDto.orderReparationId,
      },
    });
    return this.prisma.ficheIntervention.create({
      data: {
        orderReparationId: createFicheInterventionDto.orderReparationId,
        details: {
          create: etapes.map((elem) => ({
            rapport: elem.rapport,
            description: elem.description,
            title: elem.title,
          })),
        },
      },
    });
  }

  findAll() { 
    
    return this.prisma.ficheIntervention.findMany({
      include: {
        OrderReparation: { include: { Client: true, Reclamation: true } },
      },
    });

  }

  findOne(id: number) {
    return this.prisma.ficheIntervention.findUnique({ where: { id },include:{details:true} });
  }

  update(id: number, updateFicheInterventionDto: UpdateFicheInterventionDto) {
    return this.prisma.ficheIntervention.update({
      where: { id },
      data: updateFicheInterventionDto,
    });
  }

  remove(id: number) {
    return this.prisma.ficheIntervention.delete({ where: { id } });
  }
}
