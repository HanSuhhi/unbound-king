import { createAlova } from "alova";
import VueHook from "alova/vue";
import GlobalFetch from "alova/GlobalFetch";
import type { HttpException } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common";
import { isArray } from "lodash";
import { storeToRefs } from "pinia";
import { SERVER_RUNNING_PORT } from "@/composables/constant/env";
import type { ResponseOriginData } from "#/composables/types/api";
import { i18n } from "@/locals";
import { useAuthStore } from "@/stores/auth.store";
import { useDiscreteFeedback } from "@/composables/components/DiscreteFeedback";

export const alovaInst = createAlova({
  baseURL: `http://localhost:${SERVER_RUNNING_PORT}`,
  statesHook: VueHook,
  requestAdapter: GlobalFetch(),
  beforeRequest({ config }) {
    const { token } = storeToRefs(useAuthStore());
    config.headers["Content-Type"] = "application/json";
    config.headers.Authorization = `Bearer ${token.value}`;
  },
  responded: async (response: Response) => {
    const contentType = response.headers.get("Content-Type");
    if (!contentType) return;
    if (contentType.includes("text/html")) return response.text();
    if (!contentType.includes("application/json")) return;
    return defineResponse(response);
  },
  errorLogger: null
});

async function defineResponse(response: Response) {
  const { message: messageController } = useDiscreteFeedback(["message"]);

  const responseData = (await response.json()) as ResponseOriginData & HttpException;
  const { alert, statusCode, data, message } = responseData;

  if (alert) messageController.warning(alert);
  if (!statusCode) return;
  switch (statusCode) {
    case HttpStatus.OK:
    case HttpStatus.CREATED:
      return { data };
    case HttpStatus.ACCEPTED:
      return responseData;
    case HttpStatus.BAD_REQUEST:
    default:
      messageController.error(i18n.global.t(isArray(message) ? message[0] : message));
      return responseData;
  }
}

export type RequestBodyParamType<F> = F extends (request: infer P, config?: any) => any ? P : never;
