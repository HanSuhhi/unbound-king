import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;

export function getVerificationCode(params: {
  to: string
}, config: Config<string> = { params }) {
  config.params = params;
  return alovaInst.Get<string>("/v1/mails/verification-code", config);
}
