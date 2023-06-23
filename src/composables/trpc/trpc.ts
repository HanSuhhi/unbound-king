import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "#/server/trpc/trpc.router";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:13429/trpc"
    })
  ]
});
