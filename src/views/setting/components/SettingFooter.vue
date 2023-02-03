<script setup lang="ts">
import KeyboardButton from "@/components/KeyboardButton";
import { storeToRefs } from "pinia";
import { useSettingFooter } from "../composables/settingFooter";
import { useGlobalDialogStore } from "@/stores/dialog.store";

const { settingFooterButtons } = useSettingFooter();
const { showDialog } = storeToRefs(useGlobalDialogStore());

const hideDialog = () => {
  console.log("showDialog.value: ", showDialog.value);
  showDialog.value = true;
};
</script>

<template>
  <article class="setting-footer">
    <!-- {/* TODO: 设置方案 */} -->
    <section class="setting-footer_part">
      <c-button color="red" @click="hideDialog">
        <KeyboardButton class="setting-footer_error" text="q"> 退出游戏 </KeyboardButton>
      </c-button>
    </section>
    <section class="setting-footer_part">
      <KeyboardButton v-for="buttonItem in settingFooterButtons" :key="buttonItem.title" class="setting-footer_key" :text="buttonItem.key" @click="buttonItem.feedback"> {{ buttonItem.title }} </KeyboardButton>
    </section>
  </article>
</template>
