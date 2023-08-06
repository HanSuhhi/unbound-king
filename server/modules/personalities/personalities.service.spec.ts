import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { PersonalitiesService } from "./personalities.service";

describe("PersonalitiesService", () => {
  let service: PersonalitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalitiesService]
    }).compile();

    service = module.get<PersonalitiesService>(PersonalitiesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
