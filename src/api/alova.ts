import { createAlova } from "alova";
import VueHook from "alova/vue";
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
