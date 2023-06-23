import { createAlova } from "alova";
import VueHook from "alova/vue";
import GlobalFetch from "alova/GlobalFetch";
import type { ConfigProviderProps } from "naive-ui";
import { createDiscreteApi, darkTheme, lightTheme } from "naive-ui";
import type { HttpException } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common";
import { isArray } from "lodash";
import { computed } from "vue";
import { useDark } from "@vueuse/core";
import { SERVER_RUNNING_PORT } from "@/composables/constant/env";
import type { ResponseOriginData } from "#/composables/types/api";
import { i18n } from "@/locals";

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
  const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
    theme: useDark().value ? darkTheme : lightTheme
  }));
  const { message: messageController } = createDiscreteApi(
    ["message"],
    {
      configProviderProps: configProviderPropsRef
    }
  );

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
