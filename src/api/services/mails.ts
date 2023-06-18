import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
type ResponseType = string;

export function getVerificationCode(params: {
  to: string
}, config: Config<ResponseType> = { params }) {
  config.params = params;
  return alovaInst.Get<ResponseType>("/v1/mails/verification-code", config);
}
