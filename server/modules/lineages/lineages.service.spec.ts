import { Test, TestingModule } from '@nestjs/testing';
import { LineagesService } from './lineages.service';

describe('LineagesService', () => {
  let service: LineagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LineagesService],
    }).compile();

    service = module.get<LineagesService>(LineagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
