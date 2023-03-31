<script setup lang="ts">
import Alert from "@/components/alert/alert";
import Operator from "./Operator.vue";
import AttributeBlock from "./AttributeBlock.vue";
import { DATA_Attributes } from "../data/index";
</script>

<template>
  <article class="attribute-main">
    <alert class="attribute-main_alert">属性目前仅设置 5 条，对应五行，暂不支持新增。</alert>
    <article class="attribute-main_main">
      <attribute-block v-for="(attribute, id) of DATA_Attributes" :key="id" :attribute="attribute" />
    </article>
    <footer class="attribute-main_operator">
      <operator />
    </footer>
  </article>
</template>

<style scoped>
.attribute-main {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-right: var(--base-margin);
}

.attribute-main_main {
  flex: 1;
}

.attribute-main_operator {
  margin-bottom: var(--base-margin);
}
</style>
