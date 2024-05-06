import { Module } from '@nestjs/common';
import { OrderreparationsService } from './orderreparations.service';
import { OrderreparationsController } from './orderreparations.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [OrderreparationsController],
  providers: [OrderreparationsService,PrismaService],
  imports: [PrismaModule],

})
export class OrderreparationsModule {}
