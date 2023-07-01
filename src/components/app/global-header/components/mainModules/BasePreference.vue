<script setup lang='ts'>
import { NBadge, NGi, NGrid } from "naive-ui";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { defineQuitEvent } from "../../composables/events/quitEvent";
import { defineOpenSetting } from "../../composables/openSetting";
import { usePopoverControl } from "../../composables/popoverControl";
import UserCard from "../UserCard.vue";
import { closeModules } from "../../composables/modulesController";
import { defineLogoutEvent, defineReplaceDeveloperPageEvent } from "../../composables/events/auth";
import type { ModuleProp } from "./module-type";
import AsideModule from "./AsideModule.vue";
import BasePopover from "@/components/experience/BasePopover.vue";
import { useAuthStore } from "@/stores/auth.store";

const { enterKeyEvent, index } = defineProps<ModuleProp>();
const { isSighIn, isDeveloper } = storeToRefs(useAuthStore());
const { t } = useI18n();

const popoverControl = usePopoverControl(enterKeyEvent);

const modules: AppHeaderModule[] = [
  {
    icon: "setting",
    color: ["var(--main-color)", "var(--gray-deep-2)"],
    event: defineOpenSetting(popoverControl.popoverControl),
    show: isDeveloper
  },
  {
    icon: "auth",
    color: ["var(--main-color-deep-2)", "hsl(288deg 66% 51%) "],
    event: defineLogoutEvent(popoverControl.popoverControl),
    show: isSighIn
  },
  {
    icon: "exit",
    color: ["var(--red-bright-2)", "var(--red-deep-1)"],
    event: defineQuitEvent(popoverControl.popoverControl)
  },
  {
    icon: "code",
    color: ["var(--gray-bright-2)", "var(--white-deep-1)"],
    event: defineReplaceDeveloperPageEvent(popoverControl.popoverControl)
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
        <template v-for="module of modules" :key="module.event.translator">
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
../../composables/events/quitEvent../../composables/events/logoutAuth
../../composables/events/auth
