<script setup lang="ts">
import { useGlobalStore } from "@/stores/global.store";
import { NConfigProvider, NMessageProvider } from "naive-ui";
import { storeToRefs } from "pinia";
import { nextTick } from "vue";
import AppAside from "./components/app/appAside/appAside";
import AppFooter from "./components/app/AppFooter.vue";
import AppHeader from "./components/app/appHeader/AppHeader";
import { defineAppLayout } from "./components/app/composables/appLayout";
import GlobalDialog from "./components/dialog/GlobalDialog.vue";
import RouterHistory from "./components/routerHistory/RouterHistory.vue";
import { defineNaiveTheme } from "./composables/naiveTheme";
import Setting from "./modules/setting/Setting.vue";
import { useGlobalDialog, dialogMessage } from '@/composables/components/globalDialog';

const { Layout } = defineAppLayout();
const { pageTransition } = storeToRefs(useGlobalStore());
const { darkTheme, darkThemeOverrides } = defineNaiveTheme();

function setDefaultTransitionDuration() {
  const element = document.querySelector("body");
  element?.style.setProperty("--transition-duration", `${Number(import.meta.env.ANIMATION_DURATION) / 1000}s`);
}
nextTick(setDefaultTransitionDuration);

const { warning } = useGlobalDialog();
const a = warning.bind(this, {
  title: '退出游戏',
  text: '是否确认退出并关闭页面？未保存的游玩数据可能不会被保存。',
  confirm() {
    window.close();
  },
  cancel() {
  },
});
</script>

<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="darkThemeOverrides" @click="a">
    <n-message-provider>
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
          <AppAside />
        </template>
        <template #footer>
          <app-footer />
        </template>
      </base-layout>
      <Setting />
      <global-dialog v-if="dialogMessage" />
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
