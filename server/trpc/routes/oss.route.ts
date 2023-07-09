import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TrpcService } from "../trpc.service";

@Injectable()
export class OssRoute {
  // private readonly store = new OSS({
  //   region: this.configService.get("OSS_REGION"),
  //   accessKeyId: this.configService.get("OSS_KEY"),
  //   accessKeySecret: this.configService.get("OSS_SECRET"),
  //   bucket: this.configService.get("OSS_BUCKET")
  // });

  constructor(
    private readonly trpc: TrpcService,
    private readonly configService: ConfigService
  ) { }

  // private createStsBasePlayerToken = this.trpc.procedure.query(async () => {
  //   const accessKeyId = this.configService.get("OSS_BASE_PLAYER_KEY");
  //   const accessKeySecret = this.configService.get("OSS_BASE_PLAYER_SECRET");
  //   const endpoint = this.configService.get("OSS_BASE_PLAYER_ENDPOINT");
  //   const roleArn = this.configService.get("OSS_BASE_PLAYER_ARN");
  //   const roleSessionName = this.configService.get("OSS_BASE_PLAYER_SESSION_NAME");

  //   const config = new $OpenApi.Config({
  //     accessKeyId,
  //     accessKeySecret
  //   });
  //   config.endpoint = endpoint;

  //   const client = new Sts20150401(config);

  //   const assumeRoleRequest = new $Sts20150401.AssumeRoleRequest({
  //     roleArn,
  //     roleSessionName,
  //     durationSeconds: 60 * 60 * 24 * 10
  //   });
  //   const runtime = new $Util.RuntimeOptions({});
  //   const { body: { credentials: { securityToken } } } = await client.assumeRoleWithOptions(assumeRoleRequest, runtime);
  //   return securityToken;
  // });

  // public route = this.trpc.router({
  //   createStsBasePlayer: this.createStsBasePlayerToken
  // });
}
