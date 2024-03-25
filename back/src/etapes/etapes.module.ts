import { Module } from '@nestjs/common';
import { EtapesService } from './etapes.service';
import { EtapesController } from './etapes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EtapesController],
  providers: [EtapesService,PrismaService],
  imports:[PrismaModule]
})
export class EtapesModule {}
