<script setup lang='ts'>
import { NPopover } from "naive-ui";
import { usePopoverTheme } from "./composables/popoverTheme";

defineProps<{ popoverControl: boolean }>();

const { popoverThemeOverrides } = usePopoverTheme();
</script>

<template>
  <n-popover
    :theme-overrides="popoverThemeOverrides"
    trigger="click"
    :delay="300"
    :show-arrow="false"
    :show="popoverControl"
  >
    <template #trigger>
      <div cursor-pointer class="base-popover_trigger">
        <slot :control="popoverControl" name="trigger" />
      </div>
    </template>
    <slot />
  </n-popover>
</template>
