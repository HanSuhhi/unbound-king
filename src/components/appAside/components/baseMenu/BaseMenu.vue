<script setup lang="ts">
import "./aside-menu.css";
import { useAppAsideStore } from "../../store/aside.store";
import MenuItem from "./MenuItem";
import { useMenuItemClip } from "../../composables/menuItemClip";

const { activeModule } = useAppAsideStore();
useMenuItemClip();
</script>

<template>
  <article class="aside-menu">
    <menu-item v-for="menu in activeModule?.pages" :key="menu.path" :page="menu" />
  </article>
</template>
