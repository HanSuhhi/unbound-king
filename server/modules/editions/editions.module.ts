import { Module } from "@nestjs/common";
import { AssetsModule } from "../assets/assets.module";
import { ProfessionsModule } from "../professions/professions.module";
import { PersonalitiesModule } from "../personalities/personalities.module";
import { TraitsModule } from "../traits/traits.module";
import { RacesModule } from "../races/races.module";
import { EditionsService } from "./editions.service";
import { EditionsController } from "./editions.controller";

@Module({
  imports: [
    AssetsModule,
    ProfessionsModule,
    PersonalitiesModule,
    TraitsModule,
    RacesModule
  ],
  controllers: [EditionsController],
  providers: [EditionsService]
})
export class EditionsModule { }
