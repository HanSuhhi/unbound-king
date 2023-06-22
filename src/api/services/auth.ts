import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
interface ResponseType {
  /**
   * access token
   */
  access_token?: string
}
interface RequestBody {
  email: string
  code: number
  loginType: "JHuWYPd9be4E" | "9anqHyzvl83l"
}

export function postLoginWithEmail(request: RequestBody, config: Config<ResponseOriginData<ResponseType>> = {}) {
  return alovaInst.Post<ResponseOriginData<ResponseType>>("/v1/auth/login-email", request, config);
}
