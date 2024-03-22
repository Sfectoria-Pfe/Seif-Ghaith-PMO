import { Test, TestingModule } from '@nestjs/testing';
import { EntreeDevicesController } from './entree-devices.controller';
import { EntreeDevicesService } from './entree-devices.service';

describe('EntreeDevicesController', () => {
  let controller: EntreeDevicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntreeDevicesController],
      providers: [EntreeDevicesService],
    }).compile();

    controller = module.get<EntreeDevicesController>(EntreeDevicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
