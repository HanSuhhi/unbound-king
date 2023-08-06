import { Module } from "@nestjs/common";
import { AssetsModule } from "../assets/assets.module";
import { ProfessionsModule } from "../professions/professions.module";
import { EditionsService } from "./editions.service";
import { EditionsController } from "./editions.controller";

@Module({
  imports: [
    AssetsModule,
    ProfessionsModule
  ],
  controllers: [EditionsController],
  providers: [EditionsService]
})
export class EditionsModule { }
