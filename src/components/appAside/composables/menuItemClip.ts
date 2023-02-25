import { useGlobalStore } from "@/stores/global.store";
import { defer, isEqual } from "lodash-es";
import { storeToRefs } from "pinia";
import { watch } from "vue";
import { useAppAsideStore } from "../store/aside.store";

export const defineMaskPosition = () => {
  const { activeAsideModule } = storeToRefs(useGlobalStore());
  const { activeMenuIndex } = storeToRefs(useAppAsideStore());
  const index = activeMenuIndex.value.split("-").map((i) => Number(i));
  const indexLength = index.length;
  let length: number = 0;
  let opaticy: "0%" | "100%" = "100%";
  A: {
    for (const pageIndex in activeAsideModule.value!.pages) {
      const page = activeAsideModule.value!.pages[pageIndex];
      switch (indexLength) {
        default:
        case 1:
          if (Number(pageIndex) === index[0]) {
            if (page.children) opaticy = "0%";
            break A;
          }

          if (page.children) {
            length += page.collapse ? 1 : 1 + page.children.length;
            break;
          }
          break;
        case 2:
          if (!page.children) {
            length += 1;
            break;
          }
          for (const pageChild of page.children) {
            length++;
            if (isEqual(pageChild.key, index)) break A;
          }
          break;
      }
    }
  }

  const ele = document.getElementsByClassName("app-aside_panel")[0] as HTMLElement;
  ele.style.setProperty("--mask-top", `${length}`);
  ele.style.setProperty("--mask-opacity", `${opaticy}`);
};

export const useMenuItemClip = () => {
  const { activeMenuIndex } = storeToRefs(useAppAsideStore());

  defer(() => {
    watch(activeMenuIndex, defineMaskPosition, {
      immediate: true,
    });
  });
};
