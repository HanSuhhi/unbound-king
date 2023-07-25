import type { ResponseType_GetSupplement } from "@/api/services/editions";

export interface Resourse {
  name: string
  type: ResponseType_GetSupplement["resourse"][number][2]
  content: string
}

export default "name, type, content";
