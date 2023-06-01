import type SMTPTransport from "nodemailer/lib/smtp-transport";

export const Don_Conch_Village: SMTPTransport.Options = {
  host: "smtpdm.aliyun.com",
  port: 25,
  auth: {
    user: "don.conch_village@unbound-king.online",
    pass: ""
  }
};
