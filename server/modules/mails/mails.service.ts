import { Injectable, Logger } from "@nestjs/common";
import * as nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";
import { ConfigService } from "@nestjs/config";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { AuthService } from "../auth/auth.service";
import { Conch_Village } from "./mail-hosts/conch_village/don";
import { Mail as MailType } from "./enums/mail.enum";

function createMailOption() {
  return {
    replyTo: "l_98b@outlook.com"
  } as Mail.Options;
}

@Injectable()
export class MailsService {
  /**
   * Nodemailer transporter for Conch Village.
   */
  private Conch_Village_Transporter = nodemailer.createTransport(Conch_Village(this.configService));
  /**
   * Logger.
   */
  private logger = new Logger();

  constructor(
    private configService: ConfigService,
    private authService: AuthService
  ) { }

  /**
   * Sends an email using the given transporter and email options.
   * @param transport The transporter.
   * @param options The options for the email.
   * @returns The sent message info.
   */
  private async sendMail(transport: typeof this.Conch_Village_Transporter, options: Mail.Options): Promise<SMTPTransport.SentMessageInfo["messageId"]> {
    let result: SMTPTransport.SentMessageInfo;

    try {
      result = await transport.sendMail(options);
      this.logger.log(`Success: send mail: ${result.messageId}`);
    }
    catch (error) {
      this.logger.warn(`Failed: failed to send mail: ${error}`);
    }

    return result.messageId;
  }

  private async sendVerificationCodeMail(transport: typeof this.Conch_Village_Transporter, options: Mail.Options): Promise<string> {
    const code = this.authService.createEmailAuthCode();
    options.subject = "Verification Code";
    options.text = `Your verification code is: ${code}`;
    options.html = `<p>Your verification code is: ${code}</p>`;

    return this.sendMail(transport, options);
  }

  /**
   * Sends an email through the Conch Village transporter.
   * @param options The email options.
   * @param mailType The email tpyes.
   * @returns {Promise<string>} email messageId.
   */
  public async sendDonConchVillageMail(options: Mail.Options, mailType: MailType): Promise<string> {
    const mailOptions: Mail.Options = {
      from: `Don<${Conch_Village(this.configService).auth.user}>`,
      ...createMailOption(),
      ...options
    };

    switch (mailType) {
      case MailType.VerificationCode:
        return this.sendVerificationCodeMail(this.Conch_Village_Transporter, mailOptions);

      default:
        break;
    }

    return this.sendMail(this.Conch_Village_Transporter, mailOptions);
  }
}
