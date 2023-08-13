import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { AssetsModule } from "../assets/assets.module";
import { PersonalitiesModule } from "../personalities/personalities.module";
import { ProfessionsModule } from "../professions/professions.module";
import { TraitsModule } from "../traits/traits.module";
import { LineagesModule } from "../lineages/lineages.module";
import { RacesModule } from "../races/races.module";
import { EditionsService } from "./editions.service";
import { EditionsController } from "./editions.controller";

describe("EditionsController", () => {
  let controller: EditionsController;

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
      controllers: [EditionsController],
      providers: [EditionsService]
    }).compile();

    controller = module.get<EditionsController>(EditionsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
