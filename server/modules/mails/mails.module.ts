import { Module } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MailsService } from "./mails.service";
import { MailsController } from "./mails.controller";

@Module({
  imports: [AuthModule],
  providers: [MailsService],
  controllers: [MailsController]
})
export class MailsModule {}
