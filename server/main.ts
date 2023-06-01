import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";
import * as compression from "compression";
import { Logger } from "@nestjs/common";
import { AppModule } from "./app.module";
import { getViteServer } from './composables/vite-server';
import { resolveDistPath } from "./composables/path/path";
import { inNotTest } from "./composables/dev/test";
import { inNotProduction, inProduction } from "./composables/dev/production";
import * as nodemailer from 'nodemailer';

async function sendMail() {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtpdm.aliyun.com",
    port: 25,
    auth: {
      user: "bot@mail.don-code.fun",
      pass: "zxcZXC1234"
    }
  })

  const mailOptions = {
    from: 'farmer<bot@mail.don-code.fun>', // sender address mailfrom must be same with the user
    to: 'l_98b@outlook.com', // list of receivers
    cc: 'l_98b@outlook.com', // copy for receivers
    bcc: 'l_98b@outlook.com', // secret copy for receivers
    subject: 'Hello', // Subject line
    text: 'Hello world', // plaintext body
    replyTo:'l_98b@outlook.com',//custom reply address
    html:'<b>Hello world</b><img src="cid:01" style="width:200px;height:auto">', // html body
  };

  let info = await transporter.sendMail(mailOptions);

   console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  await inProduction(async () => {
    app.use(compression());
    app.useStaticAssets(resolveDistPath("client"), {
      index: false
    });
  });

  await inNotProduction(async () => {
    const { middlewares } = await getViteServer();
    app.use(middlewares);
  });

  return app;
}

inNotTest(async () => {
  const app = await bootstrap();
  const logger = new Logger("main.ts");
  const port = process.env.SERVER_RUNNING_PORT;

  app.listen(port, () => {
    logger.log(`server is running in: http://localhost:${port}`);
  });
});
