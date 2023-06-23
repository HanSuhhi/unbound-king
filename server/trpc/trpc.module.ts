import { Module } from "@nestjs/common";
import { TrpcService } from "./trpc.service";
import { TrpcRouter } from "./trpc.router";
import { AuthController } from "@/modules/auth/auth.controller";
import { AuthModule } from "@/modules/auth/auth.module";

@Module({
  imports: [
    AuthModule
  ],
  providers: [TrpcService, TrpcRouter, AuthController]
})
export class TrpcModule {}
