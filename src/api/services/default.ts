import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
type ResponseType = string;

export function getHi(config: Config<ResponseOriginData<ResponseType>> = {}) {
  return alovaInst.Get<ResponseOriginData<ResponseType>>("/v1", config);
}
