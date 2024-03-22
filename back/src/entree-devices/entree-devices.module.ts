import { Module } from '@nestjs/common';
import { EntreeDevicesService } from './entree-devices.service';
import { EntreeDevicesController } from './entree-devices.controller';

@Module({
  controllers: [EntreeDevicesController],
  providers: [EntreeDevicesService],
})
export class EntreeDevicesModule {}
