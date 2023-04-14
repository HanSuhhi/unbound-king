<script setup lang="ts">
import type { Ref } from "vue";
import { inject } from "vue";
import Operator from "./Operator.vue";
import AmbitionBlock from "./AmbitionBlock.vue";
import alert from "@/components/alert/alert";

const ambitions = inject<Ref<Array<Ambition>>>("data")!;
</script>

<template>
  <article class="ambition-main">
    <alert class="ambition-main_alert">
      抱负需包含<strong>基础加成</strong>，<strong>战斗加成</strong>以及<strong> 长期加成 </strong>。
    </alert>
    <main class="ambition-main_main">
      <template v-for="ambition of ambitions" :key="ambition.id">
        <ambition-block :ambition="ambition" />
      </template>
    </main>
    <operator />
  </article>
</template>

<style>
.ambition-main {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-right: var(--base-margin);
}

.ambition-main_alert {
  margin-top: var(--base-margin);
}

.ambition-main_main {
  display: inline-flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-top: var(--base-margin);
}
</style>
