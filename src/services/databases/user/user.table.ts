import type { Boolean } from "@/services/serviceModel";

export interface User extends ITable {
  id: number
  email: string
  token?: string
  main: Boolean
}

export default "id, email,string, main";
