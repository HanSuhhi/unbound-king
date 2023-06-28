import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { SERVER_RUNNING_PORT } from "../constant/env";
// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error, @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { AppRouter } from "#/server/trpc/trpc.router";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `http://localhost:${SERVER_RUNNING_PORT}/trpc`
    })
  ]
});
