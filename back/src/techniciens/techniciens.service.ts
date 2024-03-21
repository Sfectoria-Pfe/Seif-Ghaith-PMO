import { Injectable } from '@nestjs/common';
import { CreateTechnicienDto } from './dto/create-technicien.dto';
import { UpdateTechnicienDto } from './dto/update-technicien.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TechniciensService {
  constructor(private prisma: PrismaService) {}

  create(createTechnicienDto: CreateTechnicienDto) {
    return 'This action adds a new dfw';
  }

  findAll() {
    return this.prisma.technicien.findMany()
  }

  findOne(id: number) {
    return this.prisma.technicien.findUnique({ where: { id } });
  }

  update(id: number, updateTechnicienDto: UpdateTechnicienDto) {
    // return  this.prisma.technicien.update({
    //   where: { id },
    //   data: updateTechnicienDto,
    // });
    return "sdsd"
  }

  remove(id: number) {
    return  this.prisma.technicien.delete({ where: { id } });
  }
}
