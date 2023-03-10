<script setup lang="ts">
import { DATA_BaseIcons } from '../modules/baseIcon/data/baseIcon.data';
import { computed } from 'vue';

const props = defineProps<{
  icon?: keyof typeof DATA_BaseIcons;
  path?: string;
}>();

const icon = computed(() => {
  if (props.icon) {
    return DATA_BaseIcons[props.icon].path;
  } if (props.path) return props.path;
  return '';
});

</script>

<template>
  <div :class="icon" class="icon" />
</template>
