import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { resolveDistPath } from "./composables/path/path";
import { MailsModule } from './modules/mails/mails.module';

const KEY_NAME = "X509-cert-4832011663019173027.pem";
const PEM = resolveDistPath("certs", KEY_NAME);
const MONGO_CLOUD_URL = "mongodb+srv://framland.6xyspdc.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailsModule,
    // MongooseModule.forRoot(MONGO_CLOUD_URL, {
    //   ssl: true,
    //   sslValidate: true,
    //   sslKey: PEM,
    //   sslCert: PEM,
    //   authMechanism: "MONGODB-X509"
    // })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
