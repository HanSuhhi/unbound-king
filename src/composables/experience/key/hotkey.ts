import type { OS } from "../os";
import { useOS } from "../os";

type HotKey = Partial<Record<OS | "default", string>>;

/**
 * Hot key map.
 */
const hotKeys: Record<string, HotKey> = {
  /**
   * control
   */
  control: {
    default: "ctrl"
  }
};

/**
 * get hot key
 * @param {OS} os os system
 */
function getModifierKey(os: OS) {
  return (key: string) => hotKeys?.[key]?.[os] ?? hotKeys[key].default;
}

export function useHotkeys() {
  const { os } = useOS();

  const translator = (key: string) => hotKeys[key] ? getModifierKey(os!)(key) : key;

  return { translator };
}
