import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
export interface ResponseType_GetStandardIcons {
  /**
    * icons
    */
  icons: Array<[String, Array<number>]>
}

export function getStandardIcons(config: Config<ResponseOriginData<ResponseType_GetStandardIcons>> = {}) {
  const methodInstance = alovaInst.Get<ResponseOriginData<ResponseType_GetStandardIcons>>("/v1/assets/standard-icons", config);
  return methodInstance;
}
