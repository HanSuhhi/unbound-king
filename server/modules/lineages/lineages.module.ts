import { Module } from "@nestjs/common";
import { LineagesService } from "./lineages.service";

@Module({
  providers: [LineagesService],
  exports: [LineagesService]
})
export class LineagesModule { }
