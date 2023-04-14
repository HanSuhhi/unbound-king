<script setup lang="ts">
import type { Ref } from "vue";
import { inject } from "vue";
import { defineFormsTabs } from "../composables/formsLayout";
import FromsConfig from "./FormsConfig.vue";
import PluginTest from "./PluginTest.vue";
import creatorPreview from "./CreatorPreview.vue";

const { COMP, state } = defineFormsTabs("creator-forms");

const plugin = inject<Ref<CreatorPlugin | null>>("plugin");

function toggle(index: number) {
  return state.value.active = index;
}
</script>

<template>
  <base-tabs ref="COMP">
    <template #list>
      <p class="p-reset" @click="toggle(0)">
        表单配置
      </p>
      <p class="p-reset" @click="toggle(1)">
        插件测试
      </p>
      <p class="p-reset" @click="toggle(2)">
        人物预览
      </p>
      <p class="p-reset" />
    </template>
    <template #panel-0>
      <froms-config :form-config="plugin?.data || []" />
    </template>
    <template #panel-1>
      <plugin-test :plugin-key="plugin?.translator[0]" />
    </template>
    <template #panel-2>
      <creator-preview />
    </template>
  </base-tabs>
</template>

<style scoped>
.p-reset {
  padding: var(--small) var(--large);
}
</style>
