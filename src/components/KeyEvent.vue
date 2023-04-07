<script setup lang="ts">
import KbdIcon from "./kbdIcon/KbdIcon";
import { computed } from "vue";

const props = defineProps<{
  keyEvent: KeyEvent;
  reversed?: boolean;
}>();

const kbds = computed(() => props.keyEvent.key.split("_"));
</script>

<template>
  <div class="keyboard-event">
    <kbd-icon v-for="(kbd, index) of kbds" :key="index" :reversed="reversed" class="keyboard-event_kbd" :text="kbd" />
    <span>
      {{ keyEvent.translator[1] }}
    </span>
  </div>
</template>

<style scoped>
.keyboard-event {
  display: inline-flex;
  place-items: center;
}

.keyboard-event_kbd {
  margin-right: var(--mini);
  font-size: var(--font-title-small);
}
</style>
