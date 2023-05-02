import type { Boolean } from "@/services/serviceModel";

export interface User extends ITable {
  id: number
  name: string
  avator: string
  email: string
  main: Boolean
}

export default "id, name, avator, email, main";
