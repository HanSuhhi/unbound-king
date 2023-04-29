<script setup lang="ts">
import { storeToRefs } from "pinia";
import { NScrollbar } from "naive-ui";
import MenuItem from "./MenuItem";
import { useGlobalStore } from "@/stores/global.store";
import "./aside-menu.css";

const { activeAsideModule } = storeToRefs(useGlobalStore());
</script>

<template>
  <n-scrollbar trigger="none" class="base-menu">
    <article class="aside-menu">
      <menu-item v-for="menu in activeAsideModule?.pages" :key="menu.path" :page="menu" />
    </article>
  </n-scrollbar>
</template>
