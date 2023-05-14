<script setup lang='ts'>
import { NGi, NGrid } from "naive-ui";
import { defineQuitEvent } from "../composables/quitEvent";
import { useQuitPreference } from "../composables/quitPreference";
import { loadUser } from "../composables/user";
import { defineOpenSetting } from "../composables/openSetting";
import { usePopoverControl } from "../composables/popoverControl";
import AsideModule from "./AsideModule.vue";
import UserCard from "./UserCard.vue";
import BasePopover from "@/components/experience/BasePopover.vue";

const popoverControl = usePopoverControl();

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
    event: defineQuitEvent(popoverControl.popoverControl)
  }
];

useQuitPreference(popoverControl.popoverControl);
loadUser();
</script>

<template>
  <base-popover :popover="popoverControl">
    <template #trigger>
      <section class="module-icon">
        <icon name="module" />
      </section>
    </template>
    <user-card />
    <n-grid class="aside-modules_main" x-gap="12" y-gap="8" :cols="5">
      <n-gi v-for="module of modules" :key="module.translator[0]">
        <aside-module :module="module" />
      </n-gi>
    </n-grid>
  </base-popover>
</template>
