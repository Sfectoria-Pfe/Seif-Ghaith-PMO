import { Module } from '@nestjs/common';
import { OrderLinesService } from './order-lines.service';
import { OrderLinesController } from './order-lines.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [OrderLinesController],
  providers: [OrderLinesService,PrismaService],
  imports:[PrismaModule]
})
export class OrderLinesModule {}
