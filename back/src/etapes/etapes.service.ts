import { Injectable } from '@nestjs/common';
import { CreateEtapeDto } from './dto/create-etape.dto';
import { UpdateEtapeDto } from './dto/update-etape.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EtapesService {
  constructor(private prisma: PrismaService) {}
  create(createEtapeDto: CreateEtapeDto) {
    return this.prisma.etape.create({data:createEtapeDto})
  }

  findAll() {
    return this.prisma.etape.findMany();
  }

  findOne(id: number) {
    return this.prisma.etape.findUnique({ where: { id } });
  }

  update(id: number, updateEtapeDto: UpdateEtapeDto) {
    return this.prisma.etape.update({
      where: { id },
      data :updateEtapeDto,
    });;
  }

  remove(id: number) {
    return  this.prisma.etape.delete({ where: { id } });
  }
}
