import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { VersionsService } from "./versions.service";

describe("VersionsService", () => {
  let service: VersionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VersionsService]
    }).compile();

    service = module.get<VersionsService>(VersionsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
