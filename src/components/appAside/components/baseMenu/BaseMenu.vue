<script setup lang="ts">
import { useGlobalStore } from '@/stores/global.store';
import { storeToRefs } from 'pinia';
import { useMenuItemClip } from "../../composables/menuItemClip";
import "./aside-menu.css";
import MenuItem from "./MenuItem";

const { activeAsideModule } = storeToRefs(useGlobalStore());
useMenuItemClip();
</script>

<template>
  <article class="aside-menu">
    <menu-item v-for="menu in activeAsideModule?.pages" :key="menu.path" :page="menu" />
  </article>
</template>
