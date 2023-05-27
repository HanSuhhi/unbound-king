import { forEach, isUndefined } from "lodash";
import type { Ref } from "vue";
import { computed, ref, unref, watchEffect } from "vue";
import { haveAttribute } from "../../tool/elementAttribute.tool";
import { useTemplateClassList } from "../../composables/templateClassList";

/**
   check if the child element has the `data-disabled` attribute.
 */
function checkListChildren(el: HTMLElement): CheckListChildrenResult {
  const listChildren = Array.from(unref(el)?.children) as HTMLElement[];
  return listChildren.map((el) => {
    return [!haveAttribute(el, "data-disabled")[0] ? "normal" : "disabled", el];
  });
}

export function useRadio(htmlEl?: Ref<HTMLElement | undefined>, needClass?: boolean) {
  /**
   * @description number of list
   */
  const children = ref<CheckListChildrenResult>();
  const total = ref(0);
  watchEffect(() => (total.value = children.value?.length || 0));

  /**
   * @description disabled index list
   */
  const disabledIndexs = ref<number[]>([]);
  const setDisabledIndexs = () => {
    disabledIndexs.value = [];
    forEach(children.value, ([is, ele], index) => {
      if (is === "disabled") {
        disabledIndexs.value.push(index);
        ele.setAttribute("data-disabled", "");
      }
    });
  };
  const checkIftheIndexIsDisabled = (index: number) => disabledIndexs.value.includes(index);

  /**
   * @description active num
   */
  const _active = ref(0);
  const active = computed({
    get: () => _active.value,
    set: (index) => {
      if (checkIftheIndexIsDisabled(index)) return;

      _active.value = index;
      forEach(htmlEl!.value?.children, (el, _index) => {
        if (index === _index) el.setAttribute("data-active", "");
        else el.removeAttribute("data-active");
      });
    }
  });
  const isActive = (index: number) => {
    return index === active.value;
  };
  const setDefaultActive = () => {
    if (!isUndefined(active.value)) return;
    if (!disabledIndexs.value.length || disabledIndexs.value[0] !== 0) return (active.value = 0);
    let index = 0;
    for (const _index of disabledIndexs.value) {
      if (index === _index) index++;
      else break;
    }
    active.value = index;
  };

  watchEffect(() => {
    if (!htmlEl?.value) return;
    children.value = checkListChildren(htmlEl.value);
    setDisabledIndexs();
    setDefaultActive();
  });

  return {
    total,
    active,
    isActive,
    children,
    ...(needClass ? useTemplateClassList(["csss-radio"]) : null)
  };
}
