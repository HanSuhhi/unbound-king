import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
export interface ResponseType_GetEditions {
  asset: [string, number, string]
}

export function getEditions(config: Config<ResponseOriginData<ResponseType_GetEditions>> = {}) {
  const methodInstance = alovaInst.Get<ResponseOriginData<ResponseType_GetEditions>>("/v1/editions/editions", config);
  return methodInstance;
}
