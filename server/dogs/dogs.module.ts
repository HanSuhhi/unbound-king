import { Module } from "@nestjs/common";
import { CatsModule } from "../cats/cats.module";
import { DogsService } from "./dogs.service";
import { DogsController } from "./dogs.controller";

@Module({
  imports: [CatsModule],
  providers: [DogsService],
  controllers: [DogsController]
})
export class DogsModule {}
