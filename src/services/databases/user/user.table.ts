import type { Boolean } from "@/services/serviceModel";

export interface User extends ITable {
  id: number
  email: string
  main: Boolean
}

export default "id, email, main";
