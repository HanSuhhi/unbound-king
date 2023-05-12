<script setup lang="ts">
import { find, throttle } from "lodash-es";
import { NSelect, useMessage } from "naive-ui";
import type { Ref } from "vue";
import { computed, inject, ref } from "vue";

import typeButton from "@/components/typeButton/TypeButton.vue";

const props = defineProps<{ plugins: CreatorPlugin[] }>();

const pluginOptions = computed(() => props.plugins.map(plugin => ({ label: plugin.translator[1], value: plugin.translator[0] })));

const creator = inject<Ref<Creator>>("creator");
const message = useMessage();
const selectedPlugin = ref<string>();

const addPlugin = throttle(() => {
  if (!selectedPlugin.value) return message!.info("请选择一个创造器插件");
  creator?.value.plugins.push(find(props.plugins, plugin => plugin.translator[0] === selectedPlugin.value)!);
  selectedPlugin.value = "";
}, 500);
</script>

<template>
  <article class="step-controller">
    <section class="step-controller_add">
      <n-select v-model:value="selectedPlugin" style="width: -webkit-fill-available;" :options="pluginOptions" placeholder="请选择新增插件" />
      <type-button class="step-controller_button" @click="addPlugin">
        新增节点
      </type-button>
    </section>
  </article>
</template>

<style scoped>
@layer component {
  .step-controller {
    width: 100%;
    padding: var(--base-margin);

    background-color: var(--bg-color-bright-2);
    filter: brightness(1.2);
    border: var(--border);
    border-radius: var(--border-radius);
  }

  .step-controller_add {
    display: flex;
    align-items: center;
  }

  .step-controller_button {
    margin-left: var(--base-margin);
  }
}
</style>
