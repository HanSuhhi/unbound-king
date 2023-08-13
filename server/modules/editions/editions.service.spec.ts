import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { AssetsModule } from "../assets/assets.module";
import { PersonalitiesModule } from "../personalities/personalities.module";
import { ProfessionsModule } from "../professions/professions.module";
import { TraitsModule } from "../traits/traits.module";
import { RacesModule } from "../races/races.module";
import { LineagesModule } from "../lineages/lineages.module";
import { EditionsService } from "./editions.service";

describe("VersionsService", () => {
  let service: EditionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AssetsModule,
        ProfessionsModule,
        PersonalitiesModule,
        TraitsModule,
        RacesModule,
        LineagesModule
      ],
      providers: [EditionsService]
    }).compile();

    service = module.get<EditionsService>(EditionsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
