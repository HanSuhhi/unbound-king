import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { Gender } from "../gender/enums/gender.enum";
import { Profession } from "../professions/enums/profession.enum";
import { Trait } from "../traits/enums/trait.enum";
import { Race } from "../races/enums/race.enum";
import { ElvesLineage } from "../lineages/enums/lineage.enum";
import { CharactersService } from "./characters.service";
import { TrpcRouter } from "@/trpc/trpc.router";
import { useCharacterModelTestProviders, useUserModelTestProviders } from "@/composables/tests/providers";

describe("CharactersService", () => {
  let service: CharactersService;
  let trpcRouter: TrpcRouter;
  const characterDto = {
    name: "name",
    gender: Gender.Male,
    profession: Profession.Farmer,
    traits: [Trait.Claim, Trait.CoinCollector],
    race: Race.Elves,
    lineage: ElvesLineage.Tree
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CharactersService,
        ...useCharacterModelTestProviders(),
        ...useUserModelTestProviders()
      ]
    }).compile();

    service = module.get<CharactersService>(CharactersService);
    trpcRouter = module.get<TrpcRouter>(TrpcRouter);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
