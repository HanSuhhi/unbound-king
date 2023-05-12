<script setup lang='ts'>
import { NInput, NTab, NTabs } from "naive-ui";
import { useTabs } from "./composables/tabs";
import SettingDetail from "./components/SettingDetail.vue";

const { tabItems, tabChange } = useTabs();
</script>

<template>
  <article class="base-setting">
    <n-input />
    <n-tabs :on-update:value="tabChange" type="line" :animated="true">
      <template v-for="[key, title] of tabItems" :key="key">
        <n-tab :name="key">
          <h3 class="h-reset">
            {{ title }}
          </h3>
        </n-tab>
      </template>
      <template #suffix>
        <span class="base-setting_suffix">
          上次同步于：2023/5/4
        </span>
      </template>
    </n-tabs>
    <setting-detail />
  </article>
</template>

<style scoped>
@layer page {
  .base-setting_suffix {
    color: var(--gray-bright-2);
  }
}
</style>
