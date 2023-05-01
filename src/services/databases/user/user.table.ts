import type { Boolean } from "@/services/serviceModel";

export interface User {
  name: string
  avator: string
  email: string
  main: Boolean
}

export default "++id, name, avator, email, main";
