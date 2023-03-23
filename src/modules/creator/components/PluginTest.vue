<script setup lang="ts">
import KeyValueCard from "@/components/KeyValueCard.vue";

defineProps<{ data: ReturnStruct[] }>();
</script>

<template>
  <article class="plugin-test">
    <section class="plugin-test_main">
      <p class="p-reset plugin-test_title">生成数据</p>
      <div v-for="item of data" :key="item[0]" class="plugin-test_data">
        <key-value-card :title="item[0]" :value="item[1]" />
      </div>
    </section>
    <section class="plugin-test_bottom">
      <slot name="operator" />
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
