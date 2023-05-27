import { forEach } from "lodash";

/**
 * @description parse csss methods parameters
 */
export function parseCsssProps(obj: object, el: object) {
  forEach(obj, (v: Object, key) => {
    if (v.constructor === Object)
      parseCsssProps(v, (el as any)[key]);
    else
      (el as any)[key] = v;
  });
}
