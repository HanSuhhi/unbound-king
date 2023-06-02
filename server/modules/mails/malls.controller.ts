import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { MailsService } from "./mails.service";
import { SendCodeDto } from "./dto/send-code.dto";
import { Mail } from "./enums/mail.enum";

@ApiTags("Mails")
@Controller("malls")
export class MallsController {
  constructor(
    private readonly mailsService: MailsService
  ) {}

  @ApiOperation({
    summary: "✉️ send verification code."
  })
  @Post("send-verification-code")
  public async sendVerificationCode(@Body() sendCodeDto: SendCodeDto) {
    return this.mailsService.sendDonConchVillageMail({
      ...sendCodeDto
    }, Mail.VerificationCode);
  }

  // @ApiOperation({
  //   summary: "✉️ send mail by Don live in Conch Village."
  // })
  // @Post()
  // public async sendDonConchVillageMail(@Body() options?: MailOptions) {
  //   return this.mailsService.sendDonConchVillageMail(options);
  //   // this.mailsService.sendDonConchVillageMail({
  //   // subject: "一封冒险者的特快专递信",
  //   // text: "有人嘱托我寄出这封信，如果他在三天内没有从那该死的矿坑里回来的话。"
  //   // html: "<b>Hello world</b>"
  //   // });
  // }
}
