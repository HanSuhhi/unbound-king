<script setup lang="ts">
import { computed } from "vue";
import KbdIcon from "./kbdIcon/KbdIcon";

const props = defineProps<{
  keyEvent: KeyEvent
  reversed?: boolean
}>();

const kbds = computed(() => props.keyEvent.key.split("_"));
function kbdKey(name: string) {
  switch (name.toLowerCase()) {
    case "escape":
      return "esc";
    default:
      return name;
  }
}
</script>

<template>
  <div class="keyboard-event">
    <kbd-icon v-for="(kbd, index) of kbds" :key="index" :reversed="reversed" class="keyboard-event_kbd" :text="kbdKey(kbd)" />
    <span>
      {{ keyEvent.translator[1] }}
    </span>
  </div>
</template>

<style scoped>
@layer component {
  .keyboard-event {
    display: inline-flex;
    place-items: center;
  }

  .keyboard-event_kbd {
    margin-right: var(--mini);
  }
}
</style>
