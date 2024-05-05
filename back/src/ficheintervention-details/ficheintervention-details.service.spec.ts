import { Test, TestingModule } from '@nestjs/testing';
import { FicheinterventionDetailsService } from './ficheintervention-details.service';

describe('FicheinterventionDetailsService', () => {
  let service: FicheinterventionDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FicheinterventionDetailsService],
    }).compile();

    service = module.get<FicheinterventionDetailsService>(FicheinterventionDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
