import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
export interface ResponseType_GetRegistCharacterTraits {
  /**
    * resourse list
    */
  "resourse": Array<[{ type: "Buffer"; data: import("buffer").Buffer }, "RjygryMz" | "UzeXcSyr" | "Cx9zGuQE" | "3jXO40DE" | "Sdady1MU" | "PUjd0ipE", string, string[]]>
}

export function getRegistCharacterTraits(config: Config<ResponseOriginData<ResponseType_GetRegistCharacterTraits>> = {}) {
  const methodInstance = alovaInst.Get<ResponseOriginData<ResponseType_GetRegistCharacterTraits>>("/v1/traits/regist-character", config);
  return methodInstance;
}
