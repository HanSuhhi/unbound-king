import type { AbilityBuilder, AbilityTuple, MongoAbility, MongoQuery } from "@casl/ability";
import { Action } from "../enums/casl.enum";
import { Role } from "#/composables/enum/role.enum";

export function defineSuperAdminAbilities(roles: Role[], { can }: AbilityBuilder<MongoAbility<AbilityTuple, MongoQuery>>): void {
  if (!roles.includes(Role.SuperAdmin)) return;
  can(Action.Manage, "all");
}
