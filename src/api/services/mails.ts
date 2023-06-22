import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
type ResponseType = string;

export function getVerificationCode(params: {
  to: string
}, config: Config<ResponseOriginData<ResponseType>> = { params }) {
  config.params = params;
  return alovaInst.Get<ResponseOriginData<ResponseType>>("/v1/mails/verification-code", config);
}
