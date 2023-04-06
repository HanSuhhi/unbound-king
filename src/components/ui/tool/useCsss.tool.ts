import { defer, forEach } from "lodash-es";

/**
 * @description parse csss methods parameters
 */
export const parseCsssProps = (obj: object, el: object) => {
  forEach(obj, (v: Object, key) => {
    if (v.constructor === Object) {
      parseCsssProps(v, (el as any)[key]);
    } else {
      (el as any)[key] = v;
    }
  });
};
