import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
export interface ResponseType_PatchUpdateUserNickname {
  /**
    * The user's modified nickname
    */
  nickname: string
}
export interface RequestBody_PatchUpdateUserNickname {
  nickname: string
}
export function patchUpdateUserNickname(request: RequestBody_PatchUpdateUserNickname, params: {
  to: string
}, config: Config<ResponseOriginData<ResponseType_PatchUpdateUserNickname>> = { params }) {
  config.params = params;
  return alovaInst.Patch<ResponseOriginData<ResponseType_PatchUpdateUserNickname>>("/v1/user/update-nickname-by-email", request, config);
}
