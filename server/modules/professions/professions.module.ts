import { Module } from "@nestjs/common";
import { ProfessionsService } from "./professions.service";
import { ProfessionsController } from './professions.controller';

@Module({
  providers: [ProfessionsService],
  exports: [ProfessionsService],
  controllers: [ProfessionsController]
})
export class ProfessionsModule {
}
