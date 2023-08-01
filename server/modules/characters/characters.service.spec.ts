import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { CharactersService } from "./characters.service";
import { useCharacterModelTestProviders } from "@/composables/tests/providers";

describe("CharactersService", () => {
  let service: CharactersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CharactersService,
        ...useCharacterModelTestProviders()
      ]
    }).compile();

    service = module.get<CharactersService>(CharactersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
