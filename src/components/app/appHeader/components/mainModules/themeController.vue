<script setup lang='ts'>
import { useDark, useToggle } from "@vueuse/core";
import { loadBothCss } from "@/composables/theme/globalTheme";

defineProps<{ enterKeyEvent: KeyEventWithoutFn }>();

const isDark = useDark();
const toggleDark = useToggle(isDark);

loadBothCss("default");
</script>

<template>
  <section class="module-icon" cursor-pointer @click="toggleDark()">
    <icon v-if="isDark" name="night" />
    <icon v-else name="day" />
  </section>
</template>
