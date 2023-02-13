<script setup lang="ts">
import KeyboardButton from "@/components/KeyboardButton";
import { inject, ref } from "vue";
import { storeToRefs } from "pinia";
import { useSettingStore } from "@/views/setting/store/setting.store";

const { settingPageActive } = storeToRefs(useSettingStore());

const quitDialog = inject("quit-dialog", () => alert("error"));
const applySetting = inject("apply-setting", () => alert("error"));
const resetSetting = inject("reset-setting", () => alert("error"));

const settingFooterButtons = ref<SettingFooterButton[]>([
  {
    title: "恢复默认",
    key: ["ctrl", "z"],
    feedback: resetSetting,
  },
  {
    title: "取消",
    key: "esc",
    feedback: () => (settingPageActive.value = false),
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
    <!-- {/* TODO: 设置方案 */} -->
    <section class="setting-footer_part">
      <c-button color="red" @click="quitDialog">
        <KeyboardButton class="setting-footer_error" text="q"> 退出游戏 </KeyboardButton>
      </c-button>
    </section>
    <section class="setting-footer_part">
      <KeyboardButton v-for="buttonItem in settingFooterButtons" :key="buttonItem.title" class="setting-footer_key" :text="buttonItem.key" @click="buttonItem.feedback">
        {{ buttonItem.title }}
      </KeyboardButton>
    </section>
  </article>
</template>
