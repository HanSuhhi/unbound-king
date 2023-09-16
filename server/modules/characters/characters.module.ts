import { Module } from "@nestjs/common";
import { LineagesModule } from "../lineages/lineages.module";
import { CharactersService } from "./characters.service";
import { CharactersController } from "./characters.controller";
import { TrpcModule } from "@/trpc/trpc.module";

@Module({
  imports: [TrpcModule, LineagesModule],
  controllers: [CharactersController],
  providers: [CharactersService]
})
export class CharactersModule { }
