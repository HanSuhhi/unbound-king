import { SetMetadata } from "@nestjs/common";
import type { PolicyHandler } from "../casl.interface";
import { CHECK_POLICIES_KEY } from "@/composables/constants/auth";

export function CheckPolicies(...handlers: PolicyHandler[]) {
  return SetMetadata(CHECK_POLICIES_KEY, handlers);
}
