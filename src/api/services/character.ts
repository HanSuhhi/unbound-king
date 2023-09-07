import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
export interface ResponseType_PostRegist {
  "name": string
  "gender": "M8MA" | "3crm"
  "profession": "eC7dQ9p6Oyxh" | "2juchfbwawai"
  "traits": Array<"cLPWw0lnpQjS" | "C8pPh8oXCMKx" | "P86oW5tjRTIJ">
  "race": "AVKwZyHbuA2o" | "sxjrztcjtxld" | "BE1xF4wqYmjF"
  "lineage": "eovp79ed7hjd" | "qm8v6qy0866p" | "nn99qxmf8ki6"
}
export interface RequestBody_PostRegist {
  "name": string
  "gender": "M8MA" | "3crm"
  "profession": "eC7dQ9p6Oyxh" | "2juchfbwawai"
  "traits": Array<"cLPWw0lnpQjS" | "C8pPh8oXCMKx" | "P86oW5tjRTIJ">
  "race": "AVKwZyHbuA2o" | "sxjrztcjtxld" | "BE1xF4wqYmjF"
  "lineage": "eovp79ed7hjd" | "qm8v6qy0866p" | "nn99qxmf8ki6"
}
export function postRegist(request: RequestBody_PostRegist, config: Config<ResponseOriginData<ResponseType_PostRegist>> = {}) {
  const methodInstance = alovaInst.Post<ResponseOriginData<ResponseType_PostRegist>>("/v1/character/registion", request, config);
  return methodInstance;
}
