import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  async create(createorderDto: CreateOrderDto) {
    const { items, ...rest } = createorderDto;
    try {
      const neworder = await this.prisma.order.create({
        data: {
          ...rest,
          currentDate: new Date(rest.currentDate).toISOString(),
          dateOfIssue: new Date(rest.dateOfIssue).toISOString(),
          orderline: {
            create: items.map((item) => ({
              item:'khalil',
              qunatity: +item.quantity,
              prix_unitaire: +item.prix_unitaire,
            })),
          },
        },
      });
      return neworder;
    } catch (error) {
      console.error('Erreur lors de la création de la devis :', error);
      throw error;
    }
  }

  findAll() {
    return this.prisma.order.findMany({include:{Client:true}});
  }

  findOne(id: number) {
    return this.prisma.order.findUnique({ where: { id },include:{Client:true,orderline:true} });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.prisma.order.update({
      where: { id },
      data :updateOrderDto,
    });;
  }
  remove(id: number) {
    return  this.prisma.order.delete({ where: { id } });
  }
}

