import { Test, TestingModule } from '@nestjs/testing';
import { FicheinterventionDetailsController } from './ficheintervention-details.controller';
import { FicheinterventionDetailsService } from './ficheintervention-details.service';

describe('FicheinterventionDetailsController', () => {
  let controller: FicheinterventionDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FicheinterventionDetailsController],
      providers: [FicheinterventionDetailsService],
    }).compile();

    controller = module.get<FicheinterventionDetailsController>(FicheinterventionDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
