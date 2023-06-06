import { Module } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { MailsService } from "./mails.service";
import { MailsController } from "./mails.controller";

@Module({
  providers: [MailsService, AuthService],
  controllers: [MailsController]
})
export class MailsModule {}
