<script setup lang="ts">
import { DATA_Generators } from "@/modules/generator/data";
import KeyValueCard from "@/components/KeyValueCard.vue";
import TypeButton from "@/components/typeButton/TypeButton.vue";
import { ref } from "vue";
import { throttle } from "lodash-es";

defineProps<{ formConfig: CreatorPlugin["data"] }>();

const flush = ref(true);
const generater = throttle(() => {
  flush.value = !flush.value;
  flush.value = !flush.value;
}, 400);
</script>

<template>
  <article class="plugin-test">
    <section class="plugin-test_main">
      <p class="p-reset plugin-test_title">生成数据</p>
      <div v-for="plugin in formConfig" :key="plugin.id" class="plugin-test_data">
        <key-value-card v-if="flush" :title="`${plugin.translator.title} - ${plugin.translator.key}`" :value="DATA_Generators[plugin.generator](plugin.generatorParams)" />
      </div>
    </section>
    <section class="plugin-test_bottom">
      <type-button @click="generater">重新生成</type-button>
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
