import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserController } from "./users.controller";
import { TrpcModule } from "@/trpc/trpc.module";

@Module({
  imports: [TrpcModule],
  providers: [UsersService],
  controllers: [UserController]
})
export class UsersModule { }
