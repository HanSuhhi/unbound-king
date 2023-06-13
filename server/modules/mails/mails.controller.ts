import { Controller, Get, Query, UseInterceptors } from "@nestjs/common";
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { MailsService } from "./mails.service";
import { Mail } from "./enums/mail.enum";
import { EmailQueryPipe } from "./pipes/to.pipe";
import { ThrottlerInterceptor } from "@/interceptors/throttler.interceptor";

@ApiTags("Mails")
@Controller("mails")
export class MailsController {
  constructor(
    private readonly mailsService: MailsService
  ) {}

  @Get("verification-code")
  @ApiOperation({ summary: "✉️ send verification code." })
  @ApiQuery({
    name: "to",
    required: true,
    description: "👦 the verification code receiver",
    example: "l_98b@outlook.com"
  })
  @ApiOkResponse({
    type: String,
    description: "verification code has been sent."
  })
  @ApiBadRequestResponse({ description: "Invalid email" })
  @UseInterceptors(ThrottlerInterceptor)
  public async verificationCode(@Query("to", EmailQueryPipe) to: string) {
    return this.mailsService.sendDonConchVillageMail({
      to
    }, Mail.VerificationCode);
  }
}
