import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CacheModule } from "@nestjs/cache-manager";
import { APP_GUARD, RouterModule } from "@nestjs/core";
import { MongooseModule } from "@nestjs/mongoose";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PagesModule } from "./pages/pages.module";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { MailsModule } from "./modules/mails/mails.module";
import { PackagesModule } from "./modules/packages/packages.module";
import { defineRouterModulePaths } from "./composables/path/routerModules";
import { AuthGuard } from "./modules/auth/guards/auth.guard";
import { RolesGuard } from "./modules/roles/roles.guard";
import { CaslModule } from "./modules/casl/casl.module";
import { TrpcModule } from "./trpc/trpc.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env", ".env.server"],
      isGlobal: true
    }),
    CacheModule.register({
      isGlobal: true
    }),
    MongooseModule.forRoot("mongodb://localhost/unbound-king"),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 20
    }),
    PagesModule,
    PackagesModule,
    AuthModule,
    UsersModule,
    MailsModule,
    RouterModule.register(defineRouterModulePaths()),
    CaslModule,
    TrpcModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ]
})
export class AppModule { }
