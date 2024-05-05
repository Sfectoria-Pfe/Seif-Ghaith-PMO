import { Injectable } from '@nestjs/common';
import { CreateOrderreparationDto } from './dto/create-orderreparation.dto';
import { UpdateOrderreparationDto } from './dto/update-orderreparation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderreparationsService {
  constructor(private prisma: PrismaService) {}
  create(createOrderreparationDto: CreateOrderreparationDto) {
    return this.prisma.orderReparation.create({data:createOrderreparationDto})  }

  findAll() {
    return this.prisma.orderReparation.findMany();
  }

  findOne(id: number) {
    return this.prisma.orderReparation.findUnique({ where: { id } });
  }

  update(id: number, updateOrderreparationDto: UpdateOrderreparationDto) {
    return this.prisma.orderReparation.update({
      where: { id },
      data :updateOrderreparationDto,
    });;  }

  remove(id: number) {
    return  this.prisma.orderReparation.delete({ where: { id } });
  }
}
