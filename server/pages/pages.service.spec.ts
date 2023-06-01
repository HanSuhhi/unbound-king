import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { beforeEach, describe, expect, it } from "vitest";
import { PagesService } from "./pages.service";

describe("PagesService", () => {
  let service: PagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PagesService]
    }).compile();

    service = module.get<PagesService>(PagesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
