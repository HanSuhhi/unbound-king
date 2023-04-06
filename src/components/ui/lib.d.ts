type BaseSize = "large" | "normal" | "small";

/**
 * @description css custom properties
 */
type CssCustomProperty<T extends string | number | symbol> = Record<T, string>;

/**
 * @description useCsssLayout props
 */
type UseCsssProps<T> = Omit<{ [key in keyof T]?: Partial<import("vue").UnwrapRef<Omit<T[key], "total" | "panels">>> }, "readonly">;

type CsssAPI = import("vue").UnwrapNestedRefs<{
  read: {};
  state: {};
  style: {
    classList?: Partial<{}>;
    property?: Partial<Record<string, string>>;
  };
}>;
