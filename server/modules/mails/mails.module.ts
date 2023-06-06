import { Module } from "@nestjs/common";
import { MailsService } from "./mails.service";
import { MailsController } from "./mails.controller";

@Module({
  providers: [MailsService],
  controllers: [MailsController]
})
export class MailsModule {}
