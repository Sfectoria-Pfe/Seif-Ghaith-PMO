import { Injectable } from '@nestjs/common';
import { CreateEntreeDeviceDto } from './dto/create-entree-device.dto';
import { UpdateEntreeDeviceDto } from './dto/update-entree-device.dto';

@Injectable()
export class EntreeDevicesService {
  create(createEntreeDeviceDto: CreateEntreeDeviceDto) {
    return 'This action adds a new entreeDevice';
  }

  findAll() {
    return `This action returns all entreeDevices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entreeDevice`;
  }

  update(id: number, updateEntreeDeviceDto: UpdateEntreeDeviceDto) {
    return `This action updates a #${id} entreeDevice`;
  }

  remove(id: number) {
    return `This action removes a #${id} entreeDevice`;
  }
}
