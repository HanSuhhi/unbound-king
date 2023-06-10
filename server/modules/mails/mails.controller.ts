import { Controller, Get, Param } from "@nestjs/common";
import { ApiDefaultResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { MailsService } from "./mails.service";
import { Mail } from "./enums/mail.enum";

@ApiTags("Mails")
@Controller("mails")
export class MailsController {
  constructor(
    private readonly mailsService: MailsService
  ) {}

  @Get("verification-code?to=:to")
  @ApiOperation({
    summary: "✉️ send verification code."
  })
  @ApiParam({
    name: "to",
    required: true,
    description: "👦 the verification code receiver",
    example: "l_98b@outlook.com"
  })
  @ApiDefaultResponse({
    status: 200,
    type: String
  })
  public async verificationCode(@Param("to") to: string) {
    return this.mailsService.sendDonConchVillageMail({
      to
    }, Mail.VerificationCode);
  }
}
