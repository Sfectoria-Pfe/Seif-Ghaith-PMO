import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientsService {

  constructor(private prisma: PrismaService) {}

  create(createClientDto: CreateClientDto) {
    return this.prisma.client.create({data:createClientDto})
  }

  findAll() {
    return this.prisma.client.findMany({include:{user:{select:{email:true}},orderReparation:true,entreeDevice:true,reclamation:true}});
  }

  findOne(id: number) {
    return this.prisma.client.findUnique({ where: { id } });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.prisma.client.update({
      where: { id },
      data :updateClientDto,
    });;
  }
    
  remove(id: number) {
    return  this.prisma.client.delete({ where: { id } });
  }
}
