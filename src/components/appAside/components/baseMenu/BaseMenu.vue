<script setup lang="ts">
import "./aside-menu.css";
import { useAppAsideStore } from "../../store/aside.store";
import MenuItem from "./MenuItem";

const { activeModule } = useAppAsideStore();
</script>

<template>
  <article class="aside-menu">
    <menu-item v-for="menu in activeModule?.pages" :key="menu.path" :page="menu" />
  </article>
</template>
