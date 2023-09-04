import type { ResponseType_GetEditionByTag } from "@/api/services/editions";

export interface Resourse {
  id: number
  name: ResponseType_GetEditionByTag["resourse"][number][2]
  type: ResponseType_GetEditionByTag["resourse"][number][1]
  content: string
  tags?: ResponseType_GetEditionByTag["resourse"][number][3]
}

export default "id, name, type, content, tags";
