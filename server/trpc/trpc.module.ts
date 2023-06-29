import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TrpcService } from "./trpc.service";
import { TrpcRouter } from "./trpc.router";
import { UserRoute } from "./routes/user.route";
import { User, UserSchema } from "@/modules/users/schemas/user.schemas";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  providers: [
    TrpcRouter,
    TrpcService,
    UserRoute
  ],
  exports: [
    TrpcRouter
  ]
})
export class TrpcModule {}
