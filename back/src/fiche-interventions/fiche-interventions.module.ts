import { Module } from '@nestjs/common';
import { FicheInterventionsService } from './fiche-interventions.service';
import { FicheInterventionsController } from './fiche-interventions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FicheInterventionsController],
  providers: [FicheInterventionsService,PrismaService],
  imports:[PrismaModule]
})
export class FicheInterventionsModule {}
