<script setup lang='ts'>
import LineageoDetail from "./LineageoDetail.vue";
import LineageoList from "./LineageoList.vue";
import AddLineageoDialog from "./AddLineageoDialog.vue";
import { defineCommonDialog } from "@/composables/components/commonDialog";

defineCommonDialog();
</script>

<template>
  <add-lineageo-dialog />
  <article class="lineageo-main">
    <lineageo-list />
    <lineageo-detail />
  </article>
</template>

<style scoped>
.lineageo-main {
  display: flex;
  height: 100%;
}
</style>
