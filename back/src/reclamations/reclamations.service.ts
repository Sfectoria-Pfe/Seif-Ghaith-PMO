import { Injectable } from '@nestjs/common';
import { CreateReclamationDto } from './dto/create-reclamation.dto';
import { UpdateReclamationDto } from './dto/update-reclamation.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Client } from 'src/clients/entities/client.entity';

@Injectable()
export class ReclamationsService {
  constructor(private prisma: PrismaService) {}
  create(createReclamationDto: CreateReclamationDto) {
    return this.prisma.reclamation.create({ data:createReclamationDto });
  }

  findAll() {
    return this.prisma.reclamation.findMany({include:{Client:true}})
  }

  findOne(id: number) {
    return  this.prisma.reclamation.findUnique({ where: { id },include:{Client:true,Entrees:true} });
  }

  update(id: number, updateReclamationDto: UpdateReclamationDto) {
    return this.prisma.reclamation.update({
      where: { id },
      data: updateReclamationDto,
    });
  }

  remove(id: number) {
    return this.prisma.reclamation.delete({ where: { id } });
  }
}