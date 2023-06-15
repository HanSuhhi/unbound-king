import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { Model } from "mongoose";
import { getModelToken } from "@nestjs/mongoose";
import { PackagesService } from "./packages.service";
import { Package } from "./schemas/packages.schema";

describe("PackageService", () => {
  let packageModel: Model<Package>;
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
    packageModel = module.get<Model<Package>>(getModelToken(Package.name));
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
