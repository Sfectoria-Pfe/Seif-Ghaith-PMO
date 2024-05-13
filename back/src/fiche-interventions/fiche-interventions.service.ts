import { Injectable } from '@nestjs/common';
import { CreateFicheInterventionDto } from './dto/create-fiche-intervention.dto';
import { UpdateFicheInterventionDto } from './dto/update-fiche-intervention.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

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
        details: true,
        OrderReparation: { include: { Client: true, Reclamation: true } },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.ficheIntervention.findUnique({
      where: { id },
      include: {
        details: true,
        OrderReparation: {
          include: { Client: true, Reclamation: true, EntreeDevice: true },
        },
      },
    });
  }

  async update(
    id: number,
    updateFicheInterventionDto: UpdateFicheInterventionDto,
  ) {
    return await this.prisma.$transaction(
      async (prisma: Prisma.TransactionClient) => {
        await prisma.ficheIntervention.update({
          data: {
            status: updateFicheInterventionDto.status,
          },
          where: { id },
        });
        return await Promise.all(
          updateFicheInterventionDto.details
            .map((elem) => ({
              data: {
                rapport: elem.rapport,
                description: elem.description,
                title: elem.title,
              },
              where: { id: elem.id },
            }))
            .map((e) => prisma.ficheInterventionDetails.update(e)),
        );

        // data: updateFicheInterventionDto,
      },
    );
  }

  remove(id: number) {
    return this.prisma.ficheIntervention.delete({ where: { id } });
  }
}
