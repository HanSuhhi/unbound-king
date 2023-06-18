import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;
type ResponseType = string;

export function getHello(config: Config<ResponseType> = {}) {
  return alovaInst.Get<ResponseType>("/v1", config);
}
