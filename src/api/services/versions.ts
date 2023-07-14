import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
export interface ResponseType_GetVersions {
  asset: [string, number, string]
}

export function getVersions(config: Config<ResponseOriginData<ResponseType_GetVersions>> = {}) {
  const methodInstance = alovaInst.Get<ResponseOriginData<ResponseType_GetVersions>>("/v1/versions/versions", config);
  return methodInstance;
}
