import type { ConfigService } from "@nestjs/config";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

export function Conch_Village(config: ConfigService): SMTPTransport.Options {
  return {
    host: "smtpdm.aliyun.com",
    port: 25,
    auth: {
      user: "conch_village@unbound-king.online",
      pass: config.get("MAIL_PASSWORD")
    }
  };
}
