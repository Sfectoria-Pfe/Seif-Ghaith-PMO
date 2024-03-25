import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService extends PrismaClient {
  getHello(): string {
    return 'ksks World!';
  }
}
