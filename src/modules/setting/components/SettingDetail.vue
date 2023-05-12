<script setup lang='ts'>
import { provide, ref } from "vue";
import { BaseSettingConfig } from "../base-setting.symbol";
import SettingAnchor from "./SettingAnchor.vue";
import SettingForm from "./SettingForm.vue";

const baseSetting = ref<BaseSetting>([
  {
    translator: ["h1 title", "一级标题"],
    rules: [
      {
        translator: ["rule 1", "规则 1"],
        description: "这是一条设置"
      },
      {
        translator: ["rule 1", "规则 1"],
        description: "这是一条设置"
      }

    ]
  },
  {
    translator: ["h1 title", "第二个一级标题"],
    rules: [
      {
        translator: ["rule 3", "规则 3"],
        description: "这是一条设置"
      }
    ],
    children: [
      {
        translator: ["h2 title", "二级标题"],
        rules: [
          {
            translator: ["rule 4", "规则 4"],
            description: "这是一条设置"
          },
          {
            translator: ["rule 5", "规则 5"],
            description: "这是一条设置"
          }
        ]
      },
      {
        translator: ["h2 title", "第二个二级标题"],
        rules: [
          {
            translator: ["rule 6", "规则 6"],
            description: "这是一条设置"
          },
          {
            translator: ["rule 7", "规则 7"],
            description: "这是一条设置"
          }
        ]
      }
    ]
  }
]);

provide(BaseSettingConfig, baseSetting);
</script>

<template>
  <article class="setting-detail" full>
    <setting-form
      class="setting-detail_setting"
    />
    <setting-anchor class="setting-detail_anchor" />
  </article>
</template>

<style scoped>
@layer component {
  .setting-detail {
    display: flex;
    margin: var(--base-margin);
  }

  .setting-detail_setting {
    width: 80%;
  }
}
</style>
