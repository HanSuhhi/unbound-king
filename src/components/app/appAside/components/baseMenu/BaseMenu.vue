<script setup lang="ts">
import { storeToRefs } from "pinia";
import MenuItem from "./MenuItem";
import { useGlobalStore } from "@/stores/global.store";
import "./aside-menu.css";

const { activeAsideModule } = storeToRefs(useGlobalStore());
</script>

<template>
  <div class="base-menu">
    <article class="aside-menu">
      <menu-item v-for="menu in activeAsideModule?.pages" :key="menu.path" :page="menu" />
    </article>
  </div>
</template>

<style scoped>
.base-menu {
  position: relative;
  height: 100%;
  overflow: auto;
}
</style>
