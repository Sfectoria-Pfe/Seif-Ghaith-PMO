import { Injectable } from '@nestjs/common';
import { CreateEntreeDeviceDto } from './dto/create-entree-device.dto';
import { UpdateEntreeDeviceDto } from './dto/update-entree-device.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EntreeDevicesService {
  constructor(private prisma: PrismaService) {}
  create(createEntreeDeviceDto: CreateEntreeDeviceDto) {
    return this.prisma.entreeDevice.create({data:createEntreeDeviceDto})
  }

  findAll() {
    return this.prisma.entreeDevice.findMany({include:{Client:true}});
  }

  findOne(id: number) {
    return this.prisma.entreeDevice.findUnique({ where: { id },include:{Client:true} });
  }

  update(id: number, updateEntreeDeviceDto: UpdateEntreeDeviceDto) {
    return this.prisma.entreeDevice.update({
      where: { id },
      data :updateEntreeDeviceDto,
    });;
  }

  remove(id: number) {
    return  this.prisma.entreeDevice.delete({ where: { id } });
  }
}
