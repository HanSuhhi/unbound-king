import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { AssetsController } from "./assets.controller";
import { AssetsService } from "./assets.service";

describe("AssetsController", () => {
  let controller: AssetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetsService],
      controllers: [AssetsController]
    }).compile();

    controller = module.get<AssetsController>(AssetsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
