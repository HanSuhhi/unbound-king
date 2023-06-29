import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
export interface ResponseType_PostLoginWithEmail {
  /**
    * access token
    */
  access_token: string
  /**
    * user roles
    */
  roles: Array<"KQ8eB1eVCnIs" | "ZU3rj2Ru2rIT" | "ReBvrITKJYLo">
  /**
    * user nickname
    */
  nickname: string
}
export interface RequestBody_PostLoginWithEmail {
  email: string
  code: number
  loginType: "JHuWYPd9be4E" | "9anqHyzvl83l"
}
export function postLoginWithEmail(request: RequestBody_PostLoginWithEmail, config: Config<ResponseOriginData<ResponseType_PostLoginWithEmail>> = {}) {
  const methodInstance = alovaInst.Post<ResponseOriginData<ResponseType_PostLoginWithEmail>>("/v1/auth/login-email", request, config);
  return methodInstance;
}
