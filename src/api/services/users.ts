import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
export interface ResponseType_PatchUserNicknameByEmail {
  /**
    * The user's modified nickname
    */
  "nickname": string
}
export interface RequestBody_PatchUserNicknameByEmail {
  "nickname": string
}

export function patchUserNicknameByEmail({ request, params, config = { params } }: {
  request: RequestBody_PatchUserNicknameByEmail
  params: {
    "to": string
  }
  config?: Config<ResponseOriginData<ResponseType_PatchUserNicknameByEmail>>
}) {
  config.params = params;

  const methodInstance = alovaInst.Patch<ResponseOriginData<ResponseType_PatchUserNicknameByEmail>>("/v1/users/update-nickname-by-email", request, config);
  return methodInstance;
}
