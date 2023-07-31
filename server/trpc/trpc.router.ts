import type { INestApplication } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import * as trpcExpress from "@trpc/server/adapters/express";
import { TrpcService } from "./trpc.service";
import { UserRoute } from "./routes/user.route";
import { CharacterRoute } from "./routes/character.route";

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly userRoute: UserRoute,
    private readonly characterRoute: CharacterRoute
    // private readonly ossRoute: OssRoute
  ) { }

  public appRouter = this.trpcService.router({
    user: this.userRoute.route,
    character: this.characterRoute.route
    // oss: this.ossRoute.route
  });

  public caller = this.appRouter.createCaller({});

  async applyMiddleware(app: INestApplication) {
    app.use(
      "/trpc",
      trpcExpress.createExpressMiddleware({
        router: this.appRouter
      })
    );
  }
}

export type AppRouter = TrpcRouter["appRouter"];
