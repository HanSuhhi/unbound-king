<script setup lang='ts'>
import { useTheme } from "../../composables/theme";
import type { ModuleProp } from "./module-type";
import { loadBothCss } from "@/composables/theme/globalTheme";

const { enterKeyEvent } = defineProps<ModuleProp>();

const { isDark, toggleDark } = useTheme(enterKeyEvent);
loadBothCss("default");
</script>

<template>
  <section class="module-icon" cursor-pointer @click="toggleDark()">
    <icon v-if="isDark" name="night" />
    <icon v-else name="day" />
  </section>
</template>
