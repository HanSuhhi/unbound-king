import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
export interface ResponseType_PostRegist {
  "name": string
  "gender": "M8MA" | "3crm"
  "profession": "eC7dQ9p6Oyxh" | "2juchfbwawai" | "ZMGvaUMxVC6y"
  "traits": Array<"cLPWw0lnpQjS" | "C8pPh8oXCMKx" | "P86oW5tjRTIJ">
  "race": "AVKwZyHbuA2o" | "sxjrztcjtxld" | "BE1xF4wqYmjF"
  "lineage": "o4VvHZRebQHV" | "eovp79ed7hjd" | "qm8v6qy0866p" | "nn99qxmf8ki6"
}
export interface RequestBody_PostRegist {
  "name": string
  "gender": "M8MA" | "3crm"
  "profession": "eC7dQ9p6Oyxh" | "2juchfbwawai" | "ZMGvaUMxVC6y"
  "traits": Array<"cLPWw0lnpQjS" | "C8pPh8oXCMKx" | "P86oW5tjRTIJ">
  "race": "AVKwZyHbuA2o" | "sxjrztcjtxld" | "BE1xF4wqYmjF"
  "lineage": "o4VvHZRebQHV" | "eovp79ed7hjd" | "qm8v6qy0866p" | "nn99qxmf8ki6"
}

export function postRegist({ request, params, config = { params } }: {
  request: RequestBody_PostRegist
  params?: undefined
  config?: Config<ResponseOriginData<ResponseType_PostRegist>>
}) {
  const methodInstance = alovaInst.Post<ResponseOriginData<ResponseType_PostRegist>>("/v1/character/registion", request, config);
  return methodInstance;
}
export interface ResponseType_GetList {
  "list": { "name": string
    "gender": "M8MA" | "3crm"
    "profession": "eC7dQ9p6Oyxh" | "2juchfbwawai" | "ZMGvaUMxVC6y"
    "traits": Array<"cLPWw0lnpQjS" | "C8pPh8oXCMKx" | "P86oW5tjRTIJ">
    "race": "AVKwZyHbuA2o" | "sxjrztcjtxld" | "BE1xF4wqYmjF"
    "lineage": "o4VvHZRebQHV" | "eovp79ed7hjd" | "qm8v6qy0866p" | "nn99qxmf8ki6" }[]
}

export function getList(_?: {
  request?: undefined
  params?: undefined
  config?: Config<ResponseOriginData<ResponseType_GetList>>
}) {
  const config = _ ? _.config : {};
  const methodInstance = alovaInst.Get<ResponseOriginData<ResponseType_GetList>>("/v1/character/list", config);
  return methodInstance;
}
export interface ResponseType_DeleteCharacter {
  "state": number
  "message"?: string
}

export function deleteCharacter({ request, params, config = { params } }: {
  request?: undefined
  params: {
    "id": string
  }
  config?: Config<ResponseOriginData<ResponseType_DeleteCharacter>>
}) {
  config.params = params;

  const methodInstance = alovaInst.Delete<ResponseOriginData<ResponseType_DeleteCharacter>>("/v1/character/character", request, config);
  return methodInstance;
}
