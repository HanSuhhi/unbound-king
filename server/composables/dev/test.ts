import { IS_TEST } from "../constants/dev";
import { useIf } from "#/composables/run/if";

const [inTest, inNotTest] = useIf(IS_TEST);

export { inTest, inNotTest };
