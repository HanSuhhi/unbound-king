import { createAlova } from "alova";
import VueHook from "alova/vue";
import GlobalFetch from "alova/GlobalFetch";
import { useMessage } from "naive-ui";
import { SERVER_RUNNING_PORT } from "@/composables/constant/env";
import type { ResponseOriginData } from "#/composables/types/api";

export const alovaInst = createAlova({
  baseURL: `http://localhost:${SERVER_RUNNING_PORT}`,
  statesHook: VueHook,
  requestAdapter: GlobalFetch(),
  beforeRequest({ config }) {
    config.headers["Content-Type"] = "application/json";
  },
  responded: async (response: Response) => {
    const contentType = response.headers.get("Content-Type");
    if (!contentType) return;
    if (contentType.includes("text/html")) return response.text();
    if (!contentType.includes("application/json")) return;
    // eslint-disable-next-line no-console
    if (import.meta.env.PROD) console.clear();
    return defineResponse(response);
  },
  errorLogger: null
});

async function defineResponse(response: Response) {
  const message = useMessage();
  const responseData = (await response.json()) as ResponseOriginData;
  const { alert, statusCode, data } = responseData;
  if (alert) message.warning(alert);
  if (!statusCode) return;
  switch (statusCode) {
    case 200:
    case 201:
      return { data };
    default:
      // @todo
      return responseData;
  }
}
