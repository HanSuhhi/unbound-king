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
}
