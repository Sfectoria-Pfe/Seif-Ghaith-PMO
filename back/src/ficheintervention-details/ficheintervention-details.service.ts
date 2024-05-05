import { Injectable } from '@nestjs/common';
import { CreateFicheinterventionDetailDto } from './dto/create-ficheintervention-detail.dto';
import { UpdateFicheinterventionDetailDto } from './dto/update-ficheintervention-detail.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FicheinterventionDetailsService {
  constructor(private prisma: PrismaService) {}

  create(createFicheinterventionDetailDto: CreateFicheinterventionDetailDto) {
    return this.prisma.ficheInterventionDetails.create({data:createFicheinterventionDetailDto})
  }

  findAll() {
    return this.prisma.ficheInterventionDetails.findMany();
  }

  findOne(id: number) {
    return this.prisma.ficheInterventionDetails.findUnique({ where: { id } });

  }

  update(id: number, updateFicheinterventionDetailDto: UpdateFicheinterventionDetailDto) {
    return this.prisma.ficheInterventionDetails.update({
      where: { id },
      data :updateFicheinterventionDetailDto,
    });;
  }

  remove(id: number) {
    return  this.prisma.ficheInterventionDetails.delete({ where: { id } });

  }
}
