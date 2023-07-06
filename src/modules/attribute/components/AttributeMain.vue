<script setup lang="ts">
import { DATA } from "../../../composables/data";
import Operator from "./Operator.vue";
import AttributeBlock from "./AttributeBlock.vue";
import Alert from "@/components/Alert.vue";
</script>

<template>
  <article class="attribute-main">
    <alert class="attribute-main_alert">
      属性目前仅设置 5 条，对应五行，暂不支持新增。
    </alert>
    <article class="attribute-main_main">
      <attribute-block v-for="(attribute, id) of DATA.Attributes" :key="id" :attribute="attribute[1]" />
    </article>
    <footer class="attribute-main_operator">
      <operator />
    </footer>
  </article>
</template>

<style scoped>
@layer component {
  .attribute-main {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .attribute-main_main {
    flex: 1;
  }

  .attribute-main_operator {
    margin-bottom: var(--base-margin);
  }
}
</style>
