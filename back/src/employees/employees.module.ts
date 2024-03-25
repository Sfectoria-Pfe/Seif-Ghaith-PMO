import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService,PrismaService],
  imports:[PrismaModule]
})
export class EmployeesModule {}
