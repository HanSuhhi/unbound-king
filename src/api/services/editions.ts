import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
export interface ResponseType_GetEditions {
  BEyA1XPyO4vf: [string, number, string]
}

export function getEditions(config: Config<ResponseOriginData<ResponseType_GetEditions>> = {}) {
  const methodInstance = alovaInst.Get<ResponseOriginData<ResponseType_GetEditions>>("/v1/editions/editions", config);
  return methodInstance;
}
export interface ResponseType_GetSupplement {
  /**
    * resourse list
    */
  resourse: Array<[string, { type: "Buffer"; data: import("buffer").Buffer }, "image"]>
  /**
    * The edition number of the resource, the client decides whether to update the local cache resource according to the edition number
    */
  edition: number
  /**
    * The name of the edition, used to store in indexDB
    */
  editionName: string
  /**
    * The nickname of the edition, used in some places that may need to be displayed
    */
  editionNickname?: string
}

export function getSupplement(params: {
  "edition-type": "BEyA1XPyO4vf"
}, config: Config<ResponseOriginData<ResponseType_GetSupplement>> = { params }) {
  config.params = params;
  const methodInstance = alovaInst.Get<ResponseOriginData<ResponseType_GetSupplement>>("/v1/editions/supplement", config);
  return methodInstance;
}
