import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
export interface ResponseType_GetRegistCharacterProfessions {
  "professions": Array<"eC7dQ9p6Oyxh" | "2juchfbwawai" | "ZMGvaUMxVC6y">
}

export function getRegistCharacterProfessions(params: {
  "gender": "M8MA" | "3crm"
  "lineage": "eovp79ed7hjd" | "o4VvHZRebQHV" | "nn99qxmf8ki6" | "qm8v6qy0866p"
}, config: Config<ResponseOriginData<ResponseType_GetRegistCharacterProfessions>> = { params }) {
  config.params = params;
  const methodInstance = alovaInst.Get<ResponseOriginData<ResponseType_GetRegistCharacterProfessions>>("/v1/professions/regist-character-professions", config);
  return methodInstance;
}
