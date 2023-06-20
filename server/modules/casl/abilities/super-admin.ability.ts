import type { AbilityBuilder, AbilityTuple, MongoAbility, MongoQuery } from "@casl/ability";
import { Role } from "../../roles/enum/role.enum";
import { Action } from "../enums/casl.enum";

export function defineSuperAdminAbilities(roles: Role[], { can }: AbilityBuilder<MongoAbility<AbilityTuple, MongoQuery>>): void {
  if (!roles.includes(Role.SuperAdmin)) return;
  can(Action.Manage, "all");
}
