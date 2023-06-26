<script setup lang='ts'>
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import RouterHistory from "@/components/routerHistory/RouterHistory.vue";
import appAside from "@/components/app/appAside/AppAside";
import AppFooter from "@/components/app/AppFooter.vue";
import { defineAppLayout } from "@/components/app/composables/appLayout";
import { useGlobalStore } from "@/stores/global.store";

const { Layout, renderLayout } = defineAppLayout();
const { pageTransition } = storeToRefs(useGlobalStore());

onMounted(renderLayout);
</script>

<template>
  <base-layout
    ref="Layout"
    class="page-transition app"
  >
    <router-view v-slot="{ Component }">
      <transition :name="pageTransition" mode="out-in">
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
