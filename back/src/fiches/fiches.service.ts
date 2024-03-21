import { Injectable } from '@nestjs/common';
import { CreateFichDto } from './dto/create-fich.dto';
import { UpdateFichDto } from './dto/update-fich.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FichesService {
  constructor(private prisma: PrismaService) {}
  create(createFichDto: CreateFichDto) {
    return this.prisma.fiche.create({ data:createFichDto }); 
  }

  findAll() {
    return  this.prisma.fiche.findMany()
  }

  findOne(id: number) {
    return this.prisma.fiche.findUnique({ where: { id } });
  }

  update(id: number, updateFichDto: UpdateFichDto) {
    return  this.prisma.fiche.update({
      where: { id },
      data: updateFichDto,
    });
  }

  remove(id: number) {
    return this.prisma.article.delete({ where: { id } });
  }
}
