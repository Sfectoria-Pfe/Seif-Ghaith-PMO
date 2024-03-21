import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

import { ArticlesModule } from './articles/articles.module';
import { ClientsModule } from './clients/clients.module';
import { FichesModule } from './fiches/fiches.module';
import { ReclamationsModule } from './reclamations/reclamations.module';
import { TechniciensModule } from './techniciens/techniciens.module';

@Module({
  imports: [PrismaModule, ArticlesModule, ArticlesModule, ClientsModule, FichesModule, ReclamationsModule, TechniciensModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
