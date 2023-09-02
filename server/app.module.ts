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
import { AssetsModule } from "./modules/assets/assets.module";
import { EditionsModule } from "./modules/editions/editions.module";
import { AttributeModule } from "./modules/attributes/attribute.module";
import { ProfessionsModule } from "./modules/professions/professions.module";
import { PersonalitiesModule } from "./modules/personalities/personalities.module";
import { TraitsModule } from "./modules/traits/traits.module";
import { CharactersModule } from "./modules/characters/characters.module";
import { GenderModule } from "./modules/gender/gender.module";
import { RacesModule } from "./modules/races/races.module";
import { LineagesModule } from "./modules/lineages/lineages.module";

// const KEY_NAME = "X509-cert-4832011663019173027.pem";
// const PEM = resolveDistPath("certs", KEY_NAME);
// const MONGO_CLOUD_URL = "mongodb+srv://framland.6xyspdc.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";
// const MONGO_CLOUD_URL = "mongodb://localhost/test";

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
    TrpcModule,
    AssetsModule,
    EditionsModule,
    AttributeModule,
    ProfessionsModule,
    PersonalitiesModule,
    TraitsModule,
    CharactersModule,
    GenderModule,
    RacesModule,
    LineagesModule
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
