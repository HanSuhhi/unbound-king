import type { INestApplication } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import * as trpcExpress from "@trpc/server/adapters/express";
import { TrpcService } from "./trpc.service";
import { UserRoute } from "./routes/user.route";

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly userRoute: UserRoute
  ) { }

  public appRouter = this.trpcService.router({
    user: this.userRoute.route
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
