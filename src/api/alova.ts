import type { AlovaMethodCreateConfig } from "alova";
import { createAlova, useRequest } from "alova";
import VueHook from "alova/vue";
import type { FetchRequestInit } from "alova/GlobalFetch";
import GlobalFetch from "alova/GlobalFetch";
import { SERVER_RUNNING_PORT } from "@/composables/constant/env";

export const alovaInst = createAlova({
  baseURL: `http://localhost:${SERVER_RUNNING_PORT}`,
  statesHook: VueHook,
  requestAdapter: GlobalFetch(),
  responded: (response: Response) => {
    const contentType = response.headers.get("Content-Type");
    if (!contentType) return;
    if (contentType.includes("application/json")) {
      return response.json();
    }
    else if (contentType.includes("text/html")) {
      return response.text();
    }
    else {
      // other
    }
  }
});

function getHello(config?: AlovaMethodCreateConfig<string, unknown, FetchRequestInit, Headers>) {
  return useRequest(alovaInst.Get<string>("/", config));
}
