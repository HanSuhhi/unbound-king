import type { Types } from "mongoose";
import type { Role } from "@/modules/roles/enum/role.enum";

export interface UserTokenMessage {
  id: Types.ObjectId
  email: string
  roles: Role[]
}

export interface UserDto {
  user: UserTokenMessage
}
