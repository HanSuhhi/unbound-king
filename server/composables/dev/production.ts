import { IS_PRODUCTION } from "../constants/dev";
import { useIf } from "#/composables/run/if";

const [inProduction, inNotProduction] = useIf(IS_PRODUCTION);

export { inProduction, inNotProduction };
