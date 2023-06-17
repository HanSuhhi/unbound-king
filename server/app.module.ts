import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CacheModule } from "@nestjs/cache-manager";
import { APP_GUARD, RouterModule } from "@nestjs/core";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PagesModule } from "./pages/pages.module";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { MailsModule } from "./modules/mails/mails.module";
import { PackagesModule } from "./modules/packages/packages.module";
import { defineRouterModulePaths } from "./composables/path/routerModules";
import { AuthGuard } from "./modules/auth/guards/auth.guard";
import { resolveDistPath } from "@/composables/path/path";

const KEY_NAME = "X509-cert-4832011663019173027.pem";
const PEM = resolveDistPath("certs", KEY_NAME);
const MONGO_CLOUD_URL = "mongodb+srv://framland.6xyspdc.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env", ".env.server"],
      isGlobal: true
    }),
    CacheModule.register({
      isGlobal: true
    }),
    MongooseModule.forRoot(MONGO_CLOUD_URL, {
      ssl: true,
      sslValidate: true,
      sslKey: PEM,
      sslCert: PEM,
      authMechanism: "MONGODB-X509"
    }),
    PagesModule,
    PackagesModule,
    AuthModule,
    UsersModule,
    MailsModule,
    RouterModule.register(defineRouterModulePaths())
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ]
})
export class AppModule {}
