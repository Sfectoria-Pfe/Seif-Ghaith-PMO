import { Module } from '@nestjs/common';
import { ReclamationsService } from './reclamations.service';
import { ReclamationsController } from './reclamations.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ReclamationsController],
  providers: [ReclamationsService,PrismaService],
  imports:[PrismaModule]
})
export class ReclamationsModule {}
