<script setup lang="ts">
import { useI18n } from "vue-i18n";
import KbdIcon from "./kbdIcon/KbdIcon.vue";

defineProps<{ keyEvent: KeyEventWithoutFn; reversed?: boolean }>();

const { t } = useI18n();
</script>

<template>
  <div class="keyboard-event">
    <span>
      {{ t(keyEvent.translator) }}
    </span>
  </div>
  <kbd-icon :reversed="reversed" class="keyboard-event_kbd ml-mini" :text="keyEvent.key" />
</template>

<style scoped>
@layer component {
  .keyboard-event {
    display: inline-flex;
    place-items: center;
  }
}
</style>
