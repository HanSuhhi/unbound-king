import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
type ResponseType = string;

export function getVerificationCode(params: {
  to: string
}, config: Config<ResponseOriginData<ResponseType_GetVerificationCode>> = { params }) {
  config.params = params;
  return alovaInst.Get<ResponseOriginData<ResponseType_GetVerificationCode>>("/v1/mails/verification-code", config);
}
