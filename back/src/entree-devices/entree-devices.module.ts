import { Module } from '@nestjs/common';
import { EntreeDevicesService } from './entree-devices.service';
import { EntreeDevicesController } from './entree-devices.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EntreeDevicesController],
  providers: [EntreeDevicesService,PrismaService],
  imports:[PrismaModule]
})
export class EntreeDevicesModule {}
