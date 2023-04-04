<script setup lang="ts">
import { useGlobalStore } from "@/stores/global.store";
import { NConfigProvider, NMessageProvider } from "naive-ui";
import { storeToRefs } from "pinia";
import { nextTick } from "vue";
import AppAside from "./components/app/appAside/appAside";
import AppHeader from "./components/app/appHeader/AppHeader";
import GlobalDialog from "./components/dialog/GlobalDialog";
import RouterHistory from "./components/routerHistory/RouterHistory.vue";
import { defineAppLayout } from "./components/app/composables/appLayout";
import { defineNaiveTheme } from "./composables/naiveTheme";
import Setting from "./modules/setting/Setting";
import AppFooter from "./components/app/AppFooter.vue";

const { Layout } = defineAppLayout();
const { pageTransition } = storeToRefs(useGlobalStore());
const { darkTheme, darkThemeOverrides } = defineNaiveTheme();

function setDefaultTransitionDuration() {
  const element = document.getElementById("app");
  element?.style.setProperty("--transition-duration", `${Number(import.meta.env.ANIMATION_DURATION) / 1000}s`);
}
nextTick(setDefaultTransitionDuration);
</script>

<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="darkThemeOverrides">
    <n-message-provider>
      <c-layout ref="Layout" class="app">
        <div class="router-view-box">
          <router-view v-slot="{ Component }">
            <transition :name="pageTransition" mode="out-in">
              <component :is="Component" class="page" />
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
        <template #footer>
          <app-footer />
        </template>
      </c-layout>
      <Setting />
      <GlobalDialog />
    </n-message-provider>
  </n-config-provider>
</template>

<style>
.router-view-box {
  height: 100%;
}

.page {
  box-sizing: border-box;
  padding-top: var(--base-margin);
  padding-right: var(--base-margin);
  padding-left: var(--base-margin);
}

.router-view-dialog {
  border-radius: var(--border-radius);
}
</style>
