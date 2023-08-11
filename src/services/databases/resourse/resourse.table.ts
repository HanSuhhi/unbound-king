import type { ResponseType_GetSupplement } from "@/api/services/editions";

export interface Resourse {
  id: number
  name: string
  type: ResponseType_GetSupplement["resourse"][number][2]
  content: string
  tags?: number[]
}

export default "id, name, type, content, tags";
