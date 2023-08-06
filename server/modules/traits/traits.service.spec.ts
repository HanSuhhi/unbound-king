import { Test, TestingModule } from '@nestjs/testing';
import { TraitsService } from './traits.service';

describe('TraitsService', () => {
  let service: TraitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TraitsService],
    }).compile();

    service = module.get<TraitsService>(TraitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
