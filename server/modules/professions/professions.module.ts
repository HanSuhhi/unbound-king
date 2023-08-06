import { Module } from "@nestjs/common";
import { ProfessionsService } from "./professions.service";

@Module({
  providers: [ProfessionsService],
  exports: [ProfessionsService]
})
export class ProfessionsModule {
}
