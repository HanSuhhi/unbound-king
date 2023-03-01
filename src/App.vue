<script setup lang='ts'>
import { nextTick, ref } from "vue";
import AppAside from "./components/appAside/appAside";
import AppHeader from "./components/appHeader/AppHeader";
import GlobalDialog from "./components/dialog/GlobalDialog";
import IconPreset from "./components/IconPreset";
import Setting from "./views/setting/Setting";
import { useGlobalStore } from '@/stores/global.store';
import { storeToRefs } from 'pinia';
import { defineAppLayout } from "./composables/appLayout";
import RouterHistory from "./components/routerHistory/RouterHistory";

const { Layout } = defineAppLayout();
const { pageTransition } = storeToRefs(useGlobalStore());

const iconPreset = ref(true);
nextTick(() => iconPreset.value = false);

function setDefaultTransitionDuration() {
  const element = document.getElementById("app");
  element?.style.setProperty("--transition-duration", `${Number(import.meta.env.ANIMATION_DURATION) / 1000}s`);
}
nextTick(setDefaultTransitionDuration);
</script>

<template>
  <IconPreset v-if="iconPreset" />
  <c-layout ref="Layout" class="app ">
    <div class="router-view-box">
      <router-view v-slot="{ Component }">
        <transition :name="pageTransition" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <template #header>
      <app-header />
      <router-history />
    </template>
    <template #aside>
      <AppAside />
    </template>
  </c-layout>
  <Setting />
  <GlobalDialog />
</template>

<style scoped>
.router-view-box {
  height: calc(100% - var(--base-margin));
  margin-top: var(--base-margin);
  margin-right: var(--base-margin);
}
</style>
