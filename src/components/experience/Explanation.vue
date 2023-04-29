<script setup lang='ts'>
import { NTooltip } from "naive-ui";
import { explanationTooltipTheme } from "@/composables/theme/explanationTheme";

withDefaults(defineProps<{ placement?: "right" | "bottom" }>(), {
  placement: "bottom"
});
</script>

<template>
  <n-tooltip f_b_s c_g_b_2 :theme-overrides="explanationTooltipTheme" :placement="placement">
    <template #trigger>
      <slot name="trigger" />
    </template>
    <slot />
  </n-tooltip>
</template>
