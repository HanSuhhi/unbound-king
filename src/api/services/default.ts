import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
type ResponseType_GetHi = string;

export function getHi(_?: {
  request?: undefined
  params?: undefined
  config?: Config<ResponseOriginData<ResponseType_GetHi>>
}) {
  const config = _ ? _.config : {};
  const methodInstance = alovaInst.Get<ResponseOriginData<ResponseType_GetHi>>("/v1", config);
  return methodInstance;
}
