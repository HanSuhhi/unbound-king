import { Module } from "@nestjs/common";
import { CharactersService } from "./characters.service";
import { CharactersController } from "./characters.controller";
import { TrpcModule } from "@/trpc/trpc.module";

@Module({
  imports: [TrpcModule],
  controllers: [CharactersController],
  providers: [CharactersService]
})
export class CharactersModule { }
