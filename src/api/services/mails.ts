import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
type ResponseType_GetVerificationCode = string;

export function getVerificationCode({ request, params, config = { params } }: {
  request?: undefined
  params: {
    "to": string
  }
  config?: Config<ResponseOriginData<ResponseType_GetVerificationCode>>
}) {
  config.params = params;

  const methodInstance = alovaInst.Get<ResponseOriginData<ResponseType_GetVerificationCode>>("/v1/mails/verification-code", config);
  return methodInstance;
}
