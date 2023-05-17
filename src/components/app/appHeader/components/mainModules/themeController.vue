<script setup lang='ts'>
import { useTheme } from "../../composables/theme";
import { loadBothCss } from "@/composables/theme/globalTheme";

defineProps<{ enterKeyEvent: KeyEventWithoutFn }>();

const { isDark, toggleDark } = useTheme();
loadBothCss("default");
</script>

<template>
  <section class="module-icon" cursor-pointer @click="toggleDark()">
    <icon v-if="isDark" name="night" />
    <icon v-else name="day" />
  </section>
</template>
