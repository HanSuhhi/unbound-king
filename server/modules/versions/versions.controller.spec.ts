import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { VersionsController } from "./versions.controller";
import { VersionsService } from "./versions.service";

describe("VersionsController", () => {
  let controller: VersionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VersionsController],
      providers: [VersionsService]
    }).compile();

    controller = module.get<VersionsController>(VersionsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
