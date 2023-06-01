import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { getModelToken } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PackagesService } from "./packages.service";
import { Package } from "./schemas/package.schema";

describe("PackageService", () => {
  let service: PackagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PackagesService,
        {
          provide: getModelToken(Package.name),
          useValue: Model
        }
      ]
    }).compile();

    service = module.get<PackagesService>(PackagesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
