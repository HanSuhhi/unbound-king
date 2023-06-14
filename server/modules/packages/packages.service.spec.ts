import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { PackagesService } from "./packages.service";

describe("PackageService", () => {
  let service: PackagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PackagesService
      ]
    }).compile();

    service = module.get<PackagesService>(PackagesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
