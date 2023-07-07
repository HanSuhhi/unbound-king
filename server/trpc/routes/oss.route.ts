import { Injectable } from "@nestjs/common";
import { z } from "zod";
import * as OSS from "ali-oss";
import { ConfigService } from "@nestjs/config";
import { TrpcService } from "../trpc.service";

@Injectable()
export class OssRoute {
  private readonly store = new OSS({
    region: this.configService.get("OSS_REGION"),
    accessKeyId: this.configService.get("OSS_KEY"),
    accessKeySecret: this.configService.get("OSS_SECRET"),
    bucket: this.configService.get("OSS_BUCKET")
  });

  constructor(
    private readonly trpc: TrpcService,
    private readonly configService: ConfigService
  ) { }

  private emailValidate = z.string().email();

  public route = this.trpc.router({
    test: this.trpc.procedure.query(async () => {
      return await this.store.list();
    })
  });
}
