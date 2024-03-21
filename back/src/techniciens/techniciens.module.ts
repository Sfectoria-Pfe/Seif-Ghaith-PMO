import { Module } from '@nestjs/common';
import { TechniciensService } from './techniciens.service';
import { TechniciensController } from './techniciens.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TechniciensController],
  providers: [TechniciensService,PrismaService]
})
export class TechniciensModule {}
