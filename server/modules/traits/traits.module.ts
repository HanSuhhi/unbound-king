import { Module } from "@nestjs/common";
import { TraitsService } from "./traits.service";

@Module({
  providers: [TraitsService],
  exports: [TraitsService]
})
export class TraitsModule { }
