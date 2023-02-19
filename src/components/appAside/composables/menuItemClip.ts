import { useGlobalStore } from "@/stores/global.store";
import { defer, find, isEqual } from "lodash-es";
import { storeToRefs } from "pinia";
import { watch } from "vue";
import { useAppAsideStore } from "../store/aside.store";

const defineMaskPosition = (currentModule: AsideModule, index: number[]) => {
  const indexLength = index.length;
  let length: number = 0;
  let opaticy: "0%" | "100%" = "100%";
  A: {
    for (const pageIndex in currentModule.pages) {
      const page = currentModule.pages[pageIndex];
      switch (indexLength) {
        default:
        case 1:
          if (Number(pageIndex) === index[0]) {
            if (page.children) opaticy = "0%";
            break A;
          }
          if (page.children) {
            length += 1 + page.children.length;
            break;
          }
          // if (isEqual(page.key, index)) break A;
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
  const { activeMenuIndex, modules } = storeToRefs(useAppAsideStore());
  const { activeAsideModule } = storeToRefs(useGlobalStore());

  defer(() => {
    const module = find<AsideModule>(modules.value, (module) => module.key === activeAsideModule.value);
    watch(
      activeMenuIndex,
      () => {
        defineMaskPosition(
          module!,
          activeMenuIndex.value.split("-").map((i) => Number(i)),
        );
      },
      {
        immediate: true,
      },
    );
  });
};
