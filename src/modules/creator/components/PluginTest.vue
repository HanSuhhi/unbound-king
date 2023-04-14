<script setup lang="ts">
import { isObject } from "lodash-es";
import type { Ref } from "vue";
import { computed, inject } from "vue";
import type { usePluginTest } from "../composables/pluginTest";
import typeButton from "@/components/typeButton/TypeButton.vue";
import KeyValueCard from "@/components/KeyValueCard.vue";

type ReturnData = Record<string, ReturnType<typeof usePluginTest>>;

const props = defineProps<{ pluginKey?: string }>();

const testData = inject<Ref<ReturnData>>("test-data")!;
const data = computed(() => testData!.value[props.pluginKey]) as any;
</script>

<template>
  <article class="plugin-test">
    <section class="plugin-test_title">
      <p class="p-reset plugin-test_title">
        生成数据
      </p>
    </section>
    <section class="plugin-test_main">
      <div v-for="item of data.data" :key="item[0]" class="plugin-test_data">
        <key-value-card :title="item[0]" :value="isObject(item[1]) ? (item[1] as Translator)[1] : item[1].toString()" />
      </div>
    </section>
    <section class="plugin-test_bottom">
      <type-button @click="data.genData">
        重新生成
      </type-button>
    </section>
  </article>
</template>

<style scoped>
.plugin-test {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.plugin-test_main {
  flex: 1;
  overflow: auto;
}

.plugin-test_data {
  display: inline-block;
  margin: var(--base-margin);
}

.plugin-test_title {
  margin: var(--base-margin);
  margin-bottom: 0;
  font-size: var(--font-title);
}

.plugin-test_bottom {
  width: 100%;
  padding: var(--base-margin);
  border-top: var(--border);
}
</style>
