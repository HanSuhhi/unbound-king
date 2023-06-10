import type { AlovaMethodCreateConfig } from "alova";
import { useRequest } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";

export function getHello(config: AlovaMethodCreateConfig<string, unknown, FetchRequestInit, Headers> = {}) {
  return useRequest(alovaInst.Get<string>("/v1", config));
}
export function getVerificationCode(params: {
  to: string
}, config: AlovaMethodCreateConfig<string, unknown, FetchRequestInit, Headers> = {}) {
  config.params = params;
  return useRequest(alovaInst.Get<string>("/v1/mails/verification-code", config));
}
