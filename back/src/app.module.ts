import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClientsModule } from './clients/clients.module';
import { ReclamationsModule } from './reclamations/reclamations.module';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { EntreeDevicesModule } from './entree-devices/entree-devices.module';
import { EtapesModule } from './etapes/etapes.module';
import { OrdersModule } from './orders/orders.module';
import { OrderLinesModule } from './order-lines/order-lines.module';
import { FicheInterventionsModule } from './fiche-interventions/fiche-interventions.module';
import { AuthModule } from './auth/auth.module';
import { OrderreparationsModule } from './orderreparations/orderreparations.module';
import { FicheinterventionDetailsModule } from './ficheintervention-details/ficheintervention-details.module';

@Module({
  imports: [PrismaModule, ClientsModule,  ReclamationsModule, UsersModule, EmployeesModule, EntreeDevicesModule, EtapesModule, OrdersModule, OrderLinesModule, FicheInterventionsModule, AuthModule, OrderreparationsModule, FicheinterventionDetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
