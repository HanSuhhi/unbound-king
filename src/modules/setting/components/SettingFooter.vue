<script setup lang="ts">
import KeyEvent from "@/components/KeyEvent.vue";
import { ref } from "vue";
import { defineFooterCloseSettingEvent } from "../composables/key/closeSettingEvent";
import { defineFooterQuitEvent } from "../composables/key/footerQuitEvent";
import KeyEventButton from "@/components/KeyEventButton.vue";

const [quit] = defineFooterQuitEvent();
const [close] = defineFooterCloseSettingEvent();

const settingFooterButtons = ref<KeyEvent[]>([
  close,
  // {
  //   title: "应用",
  //   key: ["ctrl", "a"],
  //   feedback: applySetting,
  // },
]);
</script>

<template>
  <article class="setting-footer">
    <section class="setting-footer_part">
      <key-event-button color="red" :key-event="quit" />
    </section>
    <section class="setting-footer_part">
      <template v-for="keyevent in settingFooterButtons" :key="keyevent.translator[1]">
        <key-event class="setting-footer_key" :key-event="keyevent" @click="keyevent.fn(false)" />
      </template>
    </section>
  </article>
</template>
