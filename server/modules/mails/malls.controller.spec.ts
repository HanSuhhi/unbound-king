import { Test, TestingModule } from '@nestjs/testing';
import { MallsController } from './malls.controller';

describe('MallsController', () => {
  let controller: MallsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MallsController],
    }).compile();

    controller = module.get<MallsController>(MallsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
