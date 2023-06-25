<script setup lang='ts'>
import { NDrawer, NDrawerContent } from "naive-ui";
import { useI18n } from "vue-i18n";
import UserHistoryItem from "./UserHistoryItem.vue";
import { i18nLangModel } from "#/composables/i18n";

const { t } = useI18n();

const active = defineModel<boolean>();
</script>

<template>
  <n-drawer
    v-model:show="active"
    class="drawer-right" :width="502" placement="right"
  >
    <n-drawer-content
      :closable="true"
      :title="t(i18nLangModel.userDrawer.title)"
    >
      <user-history-item />
    </n-drawer-content>
  </n-drawer>
</template>
