<script setup lang="ts">
import typeButton from "@/components/typeButton/TypeButton.vue";
import type { Ref } from "vue";
import { inject } from "vue";
import { defineFormsTabs } from "../composables/formsLayout";
import { usePluginTest } from "../composables/pluginTest";
import FromsConfig from "./FormsConfig.vue";
import PluginTest from "./PluginTest.vue";

const { COMP, state } = defineFormsTabs("creator-forms");
const plugin = inject<Ref<CreatorPlugin | null>>("plugin");

const toggle = (index: number) => (state.value.active = index);

const { data, genData } = usePluginTest(plugin?.value?.data!);
</script>

<template>
  <c-tabs ref="COMP">
    <template #list>
      <p class="p-reset" @click="toggle(0)">表单配置</p>
      <p class="p-reset" @click="toggle(1)">插件测试</p>
      <p class="p-reset" />
    </template>
    <template #panel-0> <froms-config :form-config="plugin?.data || []" /> </template>
    <template #panel-1>
      <plugin-test :data="data">
        <template #operator>
          <type-button @click="genData">重新生成</type-button>
        </template>
      </plugin-test>
    </template>
  </c-tabs>
</template>

<style scoped>
.p-reset {
  padding: var(--small) var(--large);
}
</style>
