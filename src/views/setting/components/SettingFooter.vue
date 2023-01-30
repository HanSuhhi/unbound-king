<script setup lang="ts">
import KeyboardButton from "@/components/KeyboardButton";
import { useSettingFooter } from "../composables/settingFooter";

const { settingFooterButtons } = useSettingFooter();
</script>

<template>
  <article class="setting-footer">
    <!-- {/* TODO: 设置方案 */} -->
    <section class="setting-footer_part" />
    <section class="setting-footer_part">
      <KeyboardButton v-for="buttonItem in settingFooterButtons" :key="buttonItem.title" class="setting-footer_key" :text="buttonItem.key" @click="buttonItem.feedback"> {{ buttonItem.title }} </KeyboardButton>
    </section>
  </article>
</template>
