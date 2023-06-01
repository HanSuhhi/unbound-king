import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { getModelToken } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PackagesController } from "./packages.controller";
import { PackagesService } from "./packages.service";
import { Package } from "./schemas/package.schema";

describe("PackagesController", () => {
  let controller: PackagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackagesController],
      providers: [PackagesService,
        {
          provide: getModelToken(Package.name),
          useValue: Model
        }
      ]
    }).compile();

    controller = module.get<PackagesController>(PackagesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
