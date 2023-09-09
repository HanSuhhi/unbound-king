import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { TraitsController } from "./traits.controller";

describe("TraitsController", () => {
  let controller: TraitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TraitsController]
    }).compile();

    controller = module.get<TraitsController>(TraitsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
