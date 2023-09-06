import { Module } from "@nestjs/common";
import { AssetsModule } from "../assets/assets.module";
import { ProfessionsModule } from "../professions/professions.module";
import { TraitsModule } from "../traits/traits.module";
import { RacesModule } from "../races/races.module";
import { LineagesModule } from "../lineages/lineages.module";
import { GenderModule } from "../gender/gender.module";
import { EditionsService } from "./editions.service";
import { EditionsController } from "./editions.controller";

@Module({
  imports: [
    AssetsModule,
    ProfessionsModule,
    TraitsModule,
    RacesModule,
    LineagesModule,
    GenderModule
  ],
  controllers: [EditionsController],
  providers: [EditionsService]
})
export class EditionsModule { }
