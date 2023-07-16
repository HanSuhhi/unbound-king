import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
export interface ResponseType_GetStandardIcons {
  /**
    * icons
    */
  icons: Array<[string, Array<number>]>
  /**
    * The version number of the resource, the client decides whether to update the local cache resource according to the version number
    */
  edition: number
  /**
    * The name of the version, used to store in indexDB
    */
  editionName: string
  /**
    * The nickname of the version, used in some places that may need to be displayed
    */
  editionNickname?: string
}

export function getStandardIcons(config: Config<ResponseOriginData<ResponseType_GetStandardIcons>> = {}) {
  const methodInstance = alovaInst.Get<ResponseOriginData<ResponseType_GetStandardIcons>>("/v1/assets/standard-icons", config);
  return methodInstance;
}
