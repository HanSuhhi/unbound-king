import { Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { MailOptions } from "nodemailer/lib/json-transport";
import { MailsService } from "./mails.service";

@ApiTags("Mails")
@Controller("malls")
export class MallsController {
  constructor(
    private readonly mailsService: MailsService
  ) {}

  @ApiOperation({
    summary: "✉️ send mail by Don live in Conch Village."
  })
  @Post()
  public async sendDonConchVillageMail(options?: MailOptions) {
    this.mailsService.sendDonConchVillageMail({
      subject: "Hello",
      text: "Hello world",
      html: "<b>Hello world</b><img src=\"cid:01\" style=\"width:200px;height:auto\">"
    });
  }
}
