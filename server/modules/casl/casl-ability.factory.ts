import type { ExtractSubjectType, InferSubjects, MongoAbility } from "@casl/ability";
import { AbilityBuilder, createMongoAbility } from "@casl/ability";
import { Injectable } from "@nestjs/common";
import type { User } from "../users/schemas/user.schemas";
import type { Package } from "../packages/schemas/packages.schema";
import { defineSuperAdminAbilities } from "./abilities/super-admin.ability";
import type { Action } from "./enums/casl.enum";

type Subjects = InferSubjects<typeof Package | typeof User> | "all";

export type AppAbility = MongoAbility<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser({ roles }: User) {
    const abilityBuilder = new AbilityBuilder(createMongoAbility);

    defineSuperAdminAbilities(roles, abilityBuilder);

    return abilityBuilder.build({
      detectSubjectType: item =>
        item.constructor as ExtractSubjectType<Subjects>
    });
  }
}
