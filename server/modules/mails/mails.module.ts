import { Module } from "@nestjs/common";
import { MailsService } from "./mails.service";
import { MallsController } from "./malls.controller";

@Module({
  providers: [MailsService],
  controllers: [MallsController]
})
export class MailsModule {}
