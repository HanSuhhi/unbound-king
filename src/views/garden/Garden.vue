<script setup lang='ts'>
import { onMounted } from "vue";
import RouterHistory from "@/components/routerHistory/RouterHistory.vue";
import appAside from "@/components/app/appAside/AppAside";
import AppFooter from "@/components/app/AppFooter.vue";
import { defineAppLayout } from "@/components/app/composables/appLayout";

const { Layout, renderLayout } = defineAppLayout();

onMounted(renderLayout);
</script>

<template>
  <base-layout
    ref="Layout"
    class="page-transition app"
  >
    <router-view v-slot="{ Component }">
      <transition name="slide-left" mode="out-in">
        <component :is="Component" class="page" />
      </transition>
    </router-view>
    <template #header>
      <router-history />
    </template>
    <template #aside>
      <appAside />
    </template>
    <template #footer>
      <app-footer />
    </template>
  </base-layout>
</template>
