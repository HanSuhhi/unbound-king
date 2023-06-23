import type { INestApplication } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import * as trpcExpress from "@trpc/server/adapters/express";
import { TrpcService } from "./trpc.service";

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService
  ) { }

  public appRouter = this.trpc.router({
    test: this.trpc.procedure
      .query(() => {
        return {
          greeting: "Hello Bilbo"
        };
      })
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
