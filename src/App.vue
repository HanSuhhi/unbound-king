<script setup lang="ts">
import { NConfigProvider, NLoadingBarProvider, NMessageProvider, NNotificationProvider, dateZhCN, zhCN } from "naive-ui";
import { storeToRefs } from "pinia";
import { nextTick } from "vue";
import AppAside from "./components/app/appAside/appAside";
import AppFooter from "./components/app/AppFooter.vue";
import AppHeader from "./components/app/appHeader/AppHeader";
import { defineAppLayout } from "./components/app/composables/appLayout";
import GlobalDialog from "./components/dialog/GlobalDialog.vue";
import RouterHistory from "./components/routerHistory/RouterHistory.vue";
import { defineNaiveTheme } from "./composables/theme/naiveTheme";
import { useGlobalStore } from "@/stores/global.store";
import { dialogMessage } from "@/composables/components/globalDialog";

const { Layout } = defineAppLayout();
const { pageTransition } = storeToRefs(useGlobalStore());
const { darkTheme, darkThemeOverrides } = defineNaiveTheme();

function setDefaultTransitionDuration() {
  const element = document.querySelector("body");
  element?.style.setProperty("--transition-duration", `${Number(import.meta.env.ANIMATION_DURATION) / 1000}s`);
}
nextTick(setDefaultTransitionDuration);
</script>

<template>
  <n-config-provider :style="{ height: '100%' }" :locale="zhCN" :date-locale="dateZhCN" :theme="darkTheme" :theme-overrides="darkThemeOverrides">
    <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <base-layout ref="Layout" class="app">
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
              <app-aside />
            </template>
            <template #footer>
              <app-footer />
            </template>
          </base-layout>
          <global-dialog v-if="dialogMessage" />
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
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
