import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { beforeEach, describe, expect, it } from "vitest";
import { PagesController } from "./pages.controller";
import { PagesModule } from "./pages.module";

describe("PagesController", () => {
  let controller: PagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PagesModule]
    }).compile();

    controller = module.get<PagesController>(PagesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
