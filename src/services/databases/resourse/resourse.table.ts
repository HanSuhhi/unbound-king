import type { ResponseType_GetSupplement } from "@/api/services/editions";

export interface Resourse extends ITable {
  name: string
  type: ResponseType_GetSupplement["resourse"][number][2]
  content: string
}

export default "id, name, type, content";
