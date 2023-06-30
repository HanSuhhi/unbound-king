<script setup lang='ts'>
import { NBadge, NGi, NGrid } from "naive-ui";
import { storeToRefs } from "pinia";
import { defineQuitEvent } from "../../composables/quitEvent";
import { defineOpenSetting } from "../../composables/openSetting";
import { usePopoverControl } from "../../composables/popoverControl";
import UserCard from "../UserCard.vue";
import { closeModules } from "../../composables/modulesController";
import type { ModuleProp } from "./module-type";
import AsideModule from "./AsideModule.vue";
import BasePopover from "@/components/experience/BasePopover.vue";
import { useAuthStore } from "@/stores/auth.store";

const { enterKeyEvent, index } = defineProps<ModuleProp>();
const { isSighIn } = storeToRefs(useAuthStore());

const popoverControl = usePopoverControl(enterKeyEvent);

const modules: AppHeaderModule[] = [
  {
    translator: ["setting", "设置"],
    icon: "setting",
    color: ["var(--main-color)", "var(--gray-deep-2)"],
    event: defineOpenSetting(popoverControl.popoverControl)
  },
  {
    translator: ["quit", "退出"],
    icon: "exit",
    color: ["var(--red-bright-2)", "var(--red-deep-1)"],
    event: defineQuitEvent(popoverControl.popoverControl),
    show: isSighIn
  }
];

closeModules(popoverControl.popoverControl, index);
</script>

<template>
  <section class="base-preference">
    <base-popover
      :popover="popoverControl"
      style="transform: translateX(calc(-1 * var(--small)));"
    >
      <template #trigger>
        <section class="module-icon">
          <n-badge :show="!isSighIn" dot>
            <icon name="module" />
          </n-badge>
        </section>
      </template>
      <user-card />
      <n-grid class="aside-modules_main" x-gap="12" y-gap="8" :cols="5">
        <template v-for="module of modules" :key="module.translator[0]">
          <n-gi v-if="module.show ? module.show.value : true">
            <aside-module :module="module" />
          </n-gi>
        </template>
      </n-grid>
    </base-popover>
  </section>
</template>

<style scoped>
:deep(.n-badge > .icon) {
  color: var(--white);
}
</style>
