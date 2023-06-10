import { Controller, Get, Query } from "@nestjs/common";
import { ApiDefaultResponse, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { MailsService } from "./mails.service";
import { Mail } from "./enums/mail.enum";

@ApiTags("Mails")
@Controller("mails")
export class MailsController {
  constructor(
    private readonly mailsService: MailsService
  ) {}

  @Get("verification-code")
  @ApiOperation({
    summary: "✉️ send verification code."
  })
  @ApiQuery({
    name: "to",
    required: true,
    description: "👦 the verification code receiver",
    example: "l_98b@outlook.com"
  })
  @ApiDefaultResponse({
    status: 200,
    type: String
  })
  public async verificationCode(@Query("to") to: string) {
    return this.mailsService.sendDonConchVillageMail({
      to
    }, Mail.VerificationCode);
  }
}
