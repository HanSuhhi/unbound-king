<script setup lang="ts">
import { storeToRefs } from "pinia";
import MenuItem from "./MenuItem";
import { useGlobalStore } from "@/stores/global.store";
import "./aside-menu.css";

const { activeAsideModule } = storeToRefs(useGlobalStore());
</script>

<template>
  <div class="base-menu_block" />
  <div class="base-menu">
    <article class="aside-menu">
      <menu-item v-for="menu in activeAsideModule?.pages" :key="menu.path" :page="menu" />
    </article>
  </div>
  <!-- <div class="base-menu_block" data-reversed /> -->
</template>

<style scoped>
.base-menu {
  position: relative;
  height: 100%;
  overflow: auto;
  border-radius: var(--border-radius);
}

.base-menu_block {
  position: absolute;
  top: 0;
  z-index: 1;
  /* stylelint-disable-next-line value-no-vendor-prefix */
  width: -webkit-fill-available;
  height: 10px;
  background-image: radial-gradient(transparent 1px, var(--bg-color-bright-1) 1px);
  background-size: 3px 3px;
  backdrop-filter: saturate(10%) blur(4px);
}

/* .base-menu_block[data-reversed] {
  top: unset;
  bottom: 0;
} */
</style>
