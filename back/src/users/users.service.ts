import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
 
  async create(createUserDto: CreateUserDto) {
    const { password, ...rest } = createUserDto;
    const salt = await bcrypt.genSalt();
    const Hpass = await bcrypt.hashSync(password, salt);
    return await this.prisma.user.create({
      data: { ...rest, password: Hpass },
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      include: { Client: true, Employee: true },
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async  update(id: number, updateUserDto: UpdateUserDto) {
    // const { password, ...rest } = updateUserDto;
    // const salt = await bcrypt.genSalt();
    // const Hpass = await bcrypt.hashSync(password, salt);
    return this.prisma.user.update({
      where: { id },
      data:updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
