import "./tabs.css";

import { defineComponent, reactive, readonly, Transition } from "vue";
import { useCssCustomProperty } from "../composables/cssCustomProperty";
import { useElement } from "../composables/element";
import { useTabs } from "./composables/tabs";
import { useTabsList } from "./composables/tabsList";
import { useTabsPanel } from "./composables/tabsPanel";
import { useNeedToggleTransition } from "./composables/transition";
import { getVnodeIndex, slotFilter } from "../tool/vnode.tool";
import { useHtmlPropLint } from "../../../composables/util/htmlPropLint";

export default defineComponent({
  name: "CTabs",
  setup: (props, { slots, expose }) => {
    const { element, styleSetter } = useElement("csss-tabs");
    const { property } = useCssCustomProperty<Partial<CTabsCssCustomProperties>>(styleSetter);
    const { classList: tabsClassList, autoTrigger } = useTabs();
    const { classList: listClassList, listItemClassList, TabsList, total, active, isActive } = useTabsList();
    const { classList: panelClassList, panelItemClassList, panels } = useTabsPanel(total, active);

    const { transitionName, setPanel } = useNeedToggleTransition(active);

    const exposeVals: CTabsApi = reactive({
      read: {
        total: readonly(total),
        panels: readonly(panels),
        tabs: element,
        tabsList: TabsList,
      },
      state: {
        active,
        autoTrigger,
      },
      style: {
        panelTransition: transitionName,
        classList: {
          tabs: tabsClassList,
          list: listClassList,
          listItem: listItemClassList,
          panel: panelClassList,
          panelItem: panelItemClassList,
        },
        property,
      },
    });

    expose(exposeVals);

    return () => {
      return (
        <article ref={element} class={tabsClassList.value}>
          {slots.default?.()}
          <section class={listClassList.value} ref={TabsList}>
            {slots.list &&
              slotFilter(
                slots.list?.({
                  listTotal: readonly(total),
                  active: readonly(active),
                }),
              ).map((el, index, arr) => {
                const indexBase = getVnodeIndex(index, arr);
                return el.map((e, i) => (
                  <div
                    onClick={() => {
                      if (!autoTrigger.value) return;
                      const _index = indexBase + i;
                      setPanel.call(this, _index);
                      active.value = _index;
                    }}
                    data-active={useHtmlPropLint(isActive(indexBase + i))}
                    class={listItemClassList.value}>
                    {e}
                  </div>
                ));
              })}
          </section>
          <section class={panelClassList.value}>
            {panels.value.map((panel, index) => {
              return (
                slots[panel] &&
                active.value === index && (
                  <Transition name={transitionName.value} mode="out-in">
                    <section key={index} class={panelItemClassList.value}>
                      {slots[panel]?.({
                        active: readonly(active),
                      })}
                    </section>
                  </Transition>
                )
              );
            })}
          </section>
        </article>
      );
    };
  },
});
