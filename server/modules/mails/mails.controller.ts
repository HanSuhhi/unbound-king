import { Controller, Get, Query } from "@nestjs/common";
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Public } from "../auth/decorators/auth.decorator";
import { MailsService } from "./mails.service";
import { Mail } from "./enums/mail.enum";
import { EmailQueryPipe } from "@/pipes/to.pipe";
import { ApiEmailQuery } from "@/decorators/query/email.query";

@ApiTags("Mails")
@Controller("mails")
export class MailsController {
  constructor(
    private readonly mailsService: MailsService
  ) {}

  @Get("verification-code")
  @ApiOperation({ summary: "send verification code." })
  @ApiEmailQuery()
  @ApiOkResponse({
    type: String,
    description: "verification code has been sent."
  })
  @ApiBadRequestResponse({ description: "Invalid email" })
  @Public()
  public async verificationCode(
    @Query("to", EmailQueryPipe) to: string
  ) {
    return this.mailsService.sendDonConchVillageMail({
      to
    }, Mail.VerificationCode);
  }
}
