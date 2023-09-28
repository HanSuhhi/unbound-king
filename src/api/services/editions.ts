import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
export interface ResponseType_GetEditionByTag {
  /**
    * resourse list
    */
  "resourse": Array<[{ type: "Buffer"; data: import("buffer").Buffer }, "RjygryMz" | "UzeXcSyr" | "Cx9zGuQE" | "3jXO40DE" | "Sdady1MU" | "PUjd0ipE", string, string[]]>
  /**
    * The edition number of the resource, the client decides whether to update the local cache resource according to the edition number
    */
  "edition": number
  /**
    * The name of the edition, used to store in indexDB
    */
  "editionName": string
  /**
    * The nickname of the edition, used in some places that may need to be displayed
    */
  "editionNickname"?: string
}

export function getEditionByTag(params: {
  "resourse-tag": "TmzOWFqWinol" | "b0EgtbIh6DLb" | "AVKwZyHbuA2o" | "BE1xF4wqYmjF" | "sxjrztcjtxld" | "o4VvHZRebQHV" | "eovp79ed7hjd"
  "edition"?: number
}, config: Config<ResponseOriginData<ResponseType_GetEditionByTag>> = { params }) {
  config.params = params;
  const methodInstance = alovaInst.Get<ResponseOriginData<ResponseType_GetEditionByTag>>("/v1/editions/resourse", config);
  return methodInstance;
}
