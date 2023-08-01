import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { CharactersController } from "./characters.controller";
import { CharactersService } from "./characters.service";
import { useCharacterModelTestProviders } from "@/composables/tests/providers";

describe("CharactersController", () => {
  let controller: CharactersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharactersController],
      providers: [
        CharactersService,
        ...useCharacterModelTestProviders()
      ]
    }).compile();

    controller = module.get<CharactersController>(CharactersController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
