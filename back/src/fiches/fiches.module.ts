import { Module } from '@nestjs/common';
import { FichesService } from './fiches.service';
import { FichesController } from './fiches.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FichesController],
  providers: [FichesService,PrismaService],
  imports:[PrismaModule]
})
export class FichesModule {}
