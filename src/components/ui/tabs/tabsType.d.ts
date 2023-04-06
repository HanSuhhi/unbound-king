type listStatus = "normal" | "disabled" | "null";

type CheckListChildrenResult = [is: listStatus, element: HTMLElement][];

/**
 * @description css custom properties
 */
type CTabsCssCustomProperties = CssCustomProperty<"--list-item-x" | "--list-item-y" | "--list-item-color" | "--list-item-bg-color" | "--list-item-tag-width" | "--list-item-tag-bg-color" | "--list-item-hover-bg-color" | "--list-item-active-bg-color" | "--list-item-active-x" | "--list-item-active-y" | "--list-item-active-tag-bg-color">;

/**
 * @description API
 */
type CTabsApi = import("vue").UnwrapNestedRefs<{
  read: {
    total: Readonly<import("vue").Ref<number>>;
    panels: Readonly<import("vue").Ref<readonly string[]>>;
    tabs: import("vue").Ref<HTMLElement | undefined>;
    tabsList: import("vue").Ref<HTMLElement | undefined>;
  };
  state: {
    active: number;
    autoTrigger: boolean;
  };
  style: {
    panelTransition: string;
    classList?: Partial<{
      tabs: string[];
      list: string[];
      listItem: string[];
      panel: string[];
      panelItem: string[];
    }>;
    property?: Partial<CTabsCssCustomProperties>;
  };
}>;

type UseCsssTabsProps = UseCsssProps<Omit<CTabsApi, "read">>;
