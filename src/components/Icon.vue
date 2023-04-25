<script setup lang="ts">
import { computed } from "vue";
import { DATA_BaseIcons } from "../modules/baseIcon/data/baseIcon.data";
import { DATA } from "@/composables/data";

const props = defineProps<{
  icon?: BaseIcon
  name?: keyof typeof DATA_BaseIcons
  path?: string
  color?: Color
}>();

const icon = computed(() => {
  if (props.path) return props.path;
  if (props.icon) return props.icon.path;
  if (props.name) return DATA_BaseIcons[props.name]?.path || DATA.GameIcons.get(props.name)?.path || DATA_BaseIcons.close?.path;
  return "";
});

const background = computed(() => props.color && `linear-gradient(145deg, ${props.color[0]}, ${props.color[1]})`);
</script>

<template>
  <div :class="{ [icon]: true }" class="icon" :style="{ background }" />
</template>

<style scoped>
.icon {
  display: inline-block;
}
</style>
