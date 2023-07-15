import { Module } from "@nestjs/common";
import { EditionsService } from "./editions.service";
import { EditionsController } from "./editions.controller";

@Module({
  controllers: [EditionsController],
  providers: [EditionsService]
})
export class EditionsModule { }
