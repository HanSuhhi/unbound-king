import { Module } from "@nestjs/common";
import { GenderService } from "./gender.service";

@Module({
  providers: [GenderService],
  exports: [GenderService]
})
export class GenderModule {
}
