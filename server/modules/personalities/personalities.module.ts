import { Module } from "@nestjs/common";
import { PersonalitiesService } from "./personalities.service";

@Module({
  providers: [PersonalitiesService],
  exports: [PersonalitiesService]

})
export class PersonalitiesModule { }
