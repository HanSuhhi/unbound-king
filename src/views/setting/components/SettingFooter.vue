<script setup lang="ts">
import KeyboardButton from "@/components/KeyboardButton";
import { inject, ref } from "vue";

const settingFooterButtons = ref<SettingFooterButton[]>([
  {
    title: "重置",
    key: ["ctrl", "r"],
  },
  {
    title: "取消",
    key: "esc",
  },
  {
    title: "应用",
    key: ["ctrl", "a"],
  },
]);

const quitDialog = inject("quit-dialog", () => alert("error"));
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
