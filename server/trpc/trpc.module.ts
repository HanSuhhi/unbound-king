import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TrpcService } from "./trpc.service";
import { TrpcRouter } from "./trpc.router";
import { UserRoute } from "./routes/user.route";
import { OssRoute } from "./routes/oss.route";
import { CharacterRoute } from "./routes/character.route";
import { User, UserSchema } from "@/modules/users/schemas/user.schemas";
import { Character, CharacterSchema } from "@/modules/characters/schemas/character.schemas";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Character.name, schema: CharacterSchema }])
  ],
  providers: [
    TrpcRouter,
    TrpcService,
    UserRoute,
    OssRoute,
    CharacterRoute
  ],
  exports: [
    TrpcRouter
  ]
})
export class TrpcModule { }
