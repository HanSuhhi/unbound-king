import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { getModelToken } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PackagesController } from "./packages.controller";
import { PackagesService } from "./packages.service";
import { Package } from "./schemas/packages.schema";

describe("PackagesController", () => {
  let controller: PackagesController;
  let packageModel: Model<Package>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackagesController],
      providers: [PackagesService,
        {
          provide: getModelToken(Package.name),
          useValue: Model
        }]
    }).compile();

    controller = module.get<PackagesController>(PackagesController);
    packageModel = module.get<Model<Package>>(getModelToken(Package.name));
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
