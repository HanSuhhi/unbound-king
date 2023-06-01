import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PagesService } from "./pages.service";
import { PagesController } from "./pages.controller";

@Module({
  imports: [ConfigModule],
  providers: [PagesService],
  controllers: [PagesController]
})
export class PagesModule {}
