import type { ConfigService } from "@nestjs/config";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

export function Conch_Village(config: ConfigService): SMTPTransport.Options {
  return {
    host: config.get("SMTP_HOST"),
    port: config.get("SMTP_PORT"),
    auth: {
      user: config.get("SMTP_USER"),
      pass: config.get("SMTP_PASSWORD")
    }
  };
}
