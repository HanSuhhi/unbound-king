import { Module } from "@nestjs/common";
import { AssetsService } from "./assets.service";

@Module({
  providers: [AssetsService]
})
export class AssetsModule { }
