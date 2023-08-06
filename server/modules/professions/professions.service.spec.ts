import { Test, TestingModule } from '@nestjs/testing';
import { ProfessionsService } from './professions.service';

describe('ProfessionsService', () => {
  let service: ProfessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfessionsService],
    }).compile();

    service = module.get<ProfessionsService>(ProfessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
