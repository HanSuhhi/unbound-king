import { Module } from "@nestjs/common";
import { AssetsModule } from "../assets/assets.module";
import { EditionsService } from "./editions.service";
import { EditionsController } from "./editions.controller";

@Module({
  imports: [AssetsModule],
  controllers: [EditionsController],
  providers: [EditionsService]
})
export class EditionsModule { }
