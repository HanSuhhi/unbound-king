<script setup lang="ts">
import alert from "@/components/alert/alert";
import Operator from "./Operator.vue";
</script>

<template>
  <article class="ambition-main">
    <alert class="attribute-main_alert"> 抱负需包含<strong>基础加成</strong>，<strong>战斗加成</strong>以及<strong> 长期加成 </strong>。 </alert>
    <main class="ambition-main_main">123</main>
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

.ambition-main_main {
  flex: 1;
}
</style>
