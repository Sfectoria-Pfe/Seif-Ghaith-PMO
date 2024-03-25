import { Injectable } from '@nestjs/common';
import { CreateOrderLineDto } from './dto/create-order-line.dto';
import { UpdateOrderLineDto } from './dto/update-order-line.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderLinesService {
  constructor(private prisma:PrismaService){}
  create(createOrderLineDto: CreateOrderLineDto) {
    return this.prisma.orderline.create({data:createOrderLineDto})
  }

  findAll() {
    return this.prisma.orderline.findMany();
  }

  findOne(id: number) {
    return this.prisma.orderline.findUnique({ where: { id } });
  }

  update(id: number, updateOrderLineDto: UpdateOrderLineDto) {
    return this.prisma.orderline.update({
      where: { id },
      data :updateOrderLineDto,
    });;
  }

  remove(id: number) {
    return  this.prisma.orderline.delete({ where: { id } });
  }
}
