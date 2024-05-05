import { Module } from '@nestjs/common';
import { FicheinterventionDetailsService } from './ficheintervention-details.service';
import { FicheinterventionDetailsController } from './ficheintervention-details.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FicheinterventionDetailsController],
  providers: [FicheinterventionDetailsService,PrismaService],
  imports:[PrismaModule]
})
export class FicheinterventionDetailsModule {}
