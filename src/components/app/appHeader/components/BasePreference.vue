<script setup lang='ts'>
import { NGi, NGrid, NPopover } from "naive-ui";
import { useHeaderPopoverTheme } from "../composables/headerPopoverTheme";
import { defineQuitEvent } from "../composables/quitEvent";
import { usePopoverControl } from "../composables/modulePopoverControl";
import { useQuitPreference } from "../composables/quitPreference";
import { loadUser } from "../composables/user";
import { defineOpenSetting } from "../composables/openSetting";
import AsideModule from "./AsideModule.vue";
import UserCard from "./UserCard.vue";

const { popoverThemeOverrides } = useHeaderPopoverTheme();
const { popoverControl } = usePopoverControl();

const modules: AppHeaderModule[] = [
  {
    translator: ["setting", "设置"],
    icon: "setting",
    color: ["var(--main-color)", "var(--gray-deep-2)"],
    event: defineOpenSetting(popoverControl)
  },
  {
    translator: ["quit", "退出"],
    icon: "exit",
    color: ["var(--red-bright-2)", "var(--red-deep-1)"],
    event: defineQuitEvent(popoverControl)
  }
];

useQuitPreference(popoverControl);
loadUser();
</script>

<template>
  <n-popover :theme-overrides="popoverThemeOverrides" trigger="click" :delay="300" :show-arrow="false" :show="popoverControl">
    <template #trigger>
      <section class="base-preference_module" cursor-pointer @click="popoverControl = true">
        <icon name="module" />
      </section>
    </template>
    <user-card />
    <n-grid class="aside-modules_main" x-gap="12" y-gap="8" :cols="5">
      <n-gi v-for="module of modules" :key="module.translator[0]">
        <aside-module :module="module" />
      </n-gi>
    </n-grid>
  </n-popover>
</template>

<style scoped>
@layer component{
  .base-preference_module {
    display: flex;
    align-items: center;

    height: 100%;
    margin-right: var(--base-margin);

    filter: brightness(0.7);

    transition: var(--transition-prop);
  }

  .base-preference_module:hover {
    filter: brightness(1);
  }

  .base-preference_module > .icon {
    font-size: 1.5rem;
  }
}
</style>
