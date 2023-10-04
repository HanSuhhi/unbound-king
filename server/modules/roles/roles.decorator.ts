import { SetMetadata } from "@nestjs/common";
import type { Role } from "@/modules/roles/enum/role.enum";
import { ROLES_KEY } from "@/composables/constants/auth";

export function Roles(...roles: Role[]) {
  return SetMetadata(ROLES_KEY, roles);
}
