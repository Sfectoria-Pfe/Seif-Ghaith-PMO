import { Test, TestingModule } from '@nestjs/testing';
import { EntreeDevicesService } from './entree-devices.service';

describe('EntreeDevicesService', () => {
  let service: EntreeDevicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntreeDevicesService],
    }).compile();

    service = module.get<EntreeDevicesService>(EntreeDevicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
