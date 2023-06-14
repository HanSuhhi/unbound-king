import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CacheModule } from "@nestjs/cache-manager";
import { RouterModule } from "@nestjs/core";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PagesModule } from "./pages/pages.module";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { MailsModule } from "./modules/mails/mails.module";
import { PackagesModule } from "./modules/packages/packages.module";
import { defineRouterModulePaths } from "./composables/path/routerModules";
import { SupabaseModule } from "./modules/supabase/supabase.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env", ".env.server"],
      isGlobal: true
    }),
    CacheModule.register({
      isGlobal: true
    }),
    SupabaseModule,
    PagesModule,
    PackagesModule,
    AuthModule,
    UsersModule,
    MailsModule,
    RouterModule.register(defineRouterModulePaths())
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
