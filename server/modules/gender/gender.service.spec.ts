import { Test, TestingModule } from '@nestjs/testing';
import { GenderService } from './gender.service';

describe('GenderService', () => {
  let service: GenderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenderService],
    }).compile();

    service = module.get<GenderService>(GenderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
