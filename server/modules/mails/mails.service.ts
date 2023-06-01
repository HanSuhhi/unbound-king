import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";
import { Don_Conch_Village } from "./mail-hosts/conch_village/don";

function createMailOption() {
  return {
    to: "l_98b@outlook.com",
    cc: "l_98b@outlook.com",
    bcc: "l_98b@outlook.com",
    replyTo: "l_98b@outlook.com"
  } as Mail.Options;
}

@Injectable()
export class MailsService {
  private Don_Conch_Village_Transporter = nodemailer.createTransport(Don_Conch_Village);

  public async sendDonConchVillageMail(options: Mail.Options, nickName = "一封冒险者的特快专递信") {
    const mailOptions: Mail.Options = {
      from: `${nickName}<${Don_Conch_Village.auth.user}>`,
      ...createMailOption(),
      ...options
    };

    return await this.Don_Conch_Village_Transporter.sendMail(mailOptions);
  }
}
