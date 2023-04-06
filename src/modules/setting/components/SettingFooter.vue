<script setup lang="ts">
import KeyboardButton from "@/components/KeyboardButton";
import typeButton from "@/components/typeButton/TypeButton.vue";
import type { Ref } from "vue";
import { inject, ref } from "vue";
import { defineFooterQuitEvent } from "../composables/FooterQuitEvent";
import KeyEvent from "@/components/KeyEvent.vue";

const settingShow = inject<Ref<boolean>>("setting")!;

const [quit] = defineFooterQuitEvent();

const applySetting = inject("apply-setting", () => alert("error"));

const settingFooterButtons = ref<SettingFooterButton[]>([
  {
    title: "取消",
    key: "esc",
    feedback: () => (settingShow.value = false),
  },
  {
    title: "应用",
    key: ["ctrl", "a"],
    feedback: applySetting,
  },
]);
</script>

<template>
  <article class="setting-footer">
    <section class="setting-footer_part">
      <type-button color="red" size="large" @click="quit.fn(false)">
        <key-event :key-event="quit" reversed />
      </type-button>
    </section>
    <section class="setting-footer_part">
      <KeyboardButton v-for="buttonItem in settingFooterButtons" :key="buttonItem.title" class="setting-footer_key" :text="buttonItem.key" @click="buttonItem.feedback">
        {{ buttonItem.title }}
      </KeyboardButton>
    </section>
  </article>
</template>
