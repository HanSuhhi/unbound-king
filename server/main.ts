import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";
import * as compression from "compression";
import { Logger, ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";
import { getViteServer } from "./composables/vite-server";
import { resolveDistPath } from "./composables/path/path";
import { inNotTest } from "./composables/dev/test";
import { inNotProduction, inProduction } from "./composables/dev/production";
import { NotFoundExceptionFilter } from "./exception-filters/not-found-exception.filter";
import { bindSwageerModule } from "./composables/libs/swagger";
import { ResponseDataInterceptor } from "./interceptors/response-data.interceptor";
import { TrpcRouter } from "./trpc/trpc.router";
import { Prefix } from "#/composables/constant/url";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.get(TrpcRouter).applyMiddleware(app);

  await inProduction(async () => {
    app.use(compression());
    app.useStaticAssets(resolveDistPath("client"), {
      index: false
    });
  });

  await inNotProduction(async () => {
    const { middlewares } = await getViteServer();
    app.use(middlewares);
  });

  return bindSwageerModule(app)
    .useGlobalPipes(new ValidationPipe({ transform: true }))
    .useGlobalGuards()
    .useGlobalInterceptors(new ResponseDataInterceptor())
    .useGlobalFilters(new NotFoundExceptionFilter());
}

inNotTest(async () => {
  const app = await bootstrap();
  const logger = new Logger("main.ts");
  const port = process.env.SERVER_RUNNING_PORT;
  app.listen(port)
    .then(() => logger.log(`server is running in: http://localhost:${port}/${Prefix.Api}`))
    .then(() => logger.log(`game is running in: http://localhost:${port}/${Prefix.Client}`));
});
