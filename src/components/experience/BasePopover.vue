<script setup lang='ts'>
import { NPopover } from "naive-ui";
import { toRef } from "vue";
import type { usePopoverControl } from "../app/appHeader/composables/popoverControl";
import { usePopoverTheme } from "./composables/popoverTheme";

const props = defineProps<{ popover: ReturnType<typeof usePopoverControl> }>();
const popoverControl = toRef(props.popover, "popoverControl");

const { popoverThemeOverrides } = usePopoverTheme();
</script>

<template>
  <n-popover
    :theme-overrides="popoverThemeOverrides"
    :delay="300"
    :show-arrow="false"
    :show="popoverControl"
    trigger="click"
    :on-clickoutside="popover.toggle"
  >
    <template #trigger>
      <div cursor-pointer class="base-popover_trigger" @click.prevent="popover.toggle">
        <slot name="trigger" />
      </div>
    </template>
    <slot />
  </n-popover>
</template>
