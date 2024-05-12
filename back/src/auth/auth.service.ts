import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async login(Dto: CreateAuthDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: Dto.email },
      include: { Employee:true, Client: true },
    }); 
    if (!user) {
      throw new HttpException('invalid emai l', HttpStatus.BAD_REQUEST);
    }
    const VPass = await bcrypt.compare(Dto.password, user.password);
    if (!VPass) {
      throw new HttpException('invalid passwod', HttpStatus.BAD_GATEWAY);
    }
    const { password, ...Urest } = user;
    const token = await this.jwtService.signAsync(Urest);
    return token;
  }

  singup(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }
  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `sfjlgsdjl`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}

