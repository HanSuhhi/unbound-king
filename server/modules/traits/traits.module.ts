import { Module } from "@nestjs/common";
import { TraitsService } from "./traits.service";
import { TraitsController } from "./traits.controller";

@Module({
  providers: [TraitsService],
  exports: [TraitsService],
  controllers: [TraitsController]
})
export class TraitsModule { }
