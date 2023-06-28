import type { Role } from "#/composables/enum/role.enum";
import type { Boolean } from "@/services/serviceModel";

export interface User extends ITable {
  id: number
  email: string
  token?: string
  roles?: Role[]
  nickname?: string
  main: Boolean
}

export default "id, email, token, roles, nickname, main";
