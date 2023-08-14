import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
export interface ResponseType_PostRegist {
  "name": string
  "gender": number
  "profession": "eC7dQ9p6Oyxh" | "2juchfbwawai"
  "personality": "KFy9eYWYnfbX"
  "traits": Array<"cLPWw0lnpQjS">
  "race": "KFy9eYWYnfbX" | "sxjrztcjtxld" | "BE1xF4wqYmjF" | "dh7enup4k4yq"
  "lineage": "eovp79ed7hjd" | "qm8v6qy0866p" | "nn99qxmf8ki6"
}
export interface RequestBody_PostRegist {
  "name": string
  "gender": number
  "profession": "eC7dQ9p6Oyxh" | "2juchfbwawai"
  "personality": "KFy9eYWYnfbX"
  "traits": Array<"cLPWw0lnpQjS">
  "race": "KFy9eYWYnfbX" | "sxjrztcjtxld" | "BE1xF4wqYmjF" | "dh7enup4k4yq"
  "lineage": "eovp79ed7hjd" | "qm8v6qy0866p" | "nn99qxmf8ki6"
}
export function postRegist(request: RequestBody_PostRegist, config: Config<ResponseOriginData<ResponseType_PostRegist>> = {}) {
  const methodInstance = alovaInst.Post<ResponseOriginData<ResponseType_PostRegist>>("/v1/character/registion", request, config);
  return methodInstance;
}
