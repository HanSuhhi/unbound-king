import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { EditionsController } from "./editions.controller";
import { EditionsService } from "./editions.service";

describe("EditionsController", () => {
  let controller: EditionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditionsController],
      providers: [EditionsService]
    }).compile();

    controller = module.get<EditionsController>(EditionsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
