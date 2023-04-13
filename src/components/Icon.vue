<script setup lang="ts">
import { DATA } from "@/composables/data";
import { computed } from "vue";
import { DATA_BaseIcons } from "../modules/baseIcon/data/baseIcon.data";

const props = defineProps<{
  icon?: BaseIcon;
  // type is might keyof typeof DATA_BaseIcons or ids of game icons.
  // this setting just for compatibility
  name?: keyof typeof DATA_BaseIcons;
}>();

const icon = computed(() => {
  if (props.icon) return props.icon.path;
  if (props.name) return DATA_BaseIcons[props.name]?.path || DATA["DATA_GameIcons"].get(props.name)!.path;
  return "";
});
</script>

<template>
  <div :class="icon" class="icon" />
</template>

<style scoped>
.icon {
  display: inline-block;
}
</style>
