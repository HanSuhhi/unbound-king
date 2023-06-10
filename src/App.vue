<script setup lang="ts">
import { NConfigProvider, NLoadingBarProvider, NMessageProvider, NNotificationProvider, dateZhCN, zhCN } from "naive-ui";
import GlobalDialog from "./components/dialog/global/GlobalDialog.vue";
import { bindNaiveUILayer, defineNaiveTheme } from "./composables/theme/naiveTheme";
import { useCorsor } from "./composables/experience/cursor";
import { provideStaticStyleVariables } from "./composables/constant/transitionDuration";
import GlobalHeader from "./components/app/global-header/GlobalHeader";
import { getVerificationCode } from "./api/services/test";
import { dialogMessage } from "@/composables/components/globalDialog";
import Noise from "@/components/effects/BackgroundNoise.vue";
// disableDefaultKeys();

const { darkTheme, darkThemeOverrides } = defineNaiveTheme();

provideStaticStyleVariables();
useCorsor();
bindNaiveUILayer();

getVerificationCode({
  to: "l_98b@outlook.com"
});
</script>

<template>
  <noise />
  <n-config-provider preflight-style-disabled :locale="zhCN" :date-locale="dateZhCN" :theme="darkTheme" :theme-overrides="darkThemeOverrides">
    <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <global-header />
          <suspense>
            <router-view />
            <template #fallback>
              loading...
            </template>
          </suspense>
          <global-dialog v-if="dialogMessage" />
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style>
@layer page {
  .page {
    --grid-template-areas: "header header" "main aside" "footer footer";

    box-sizing: border-box;
    padding: var(--base-margin);
    padding-bottom: 0;
  }

  .app {
    height: calc(100vh - var(--global-header-height));
  }

  .app-main {
    --root-base-margin: calc(var(--normal) * 0.8);
    --base-margin: calc(var(--normal) * 0.8);

    position: relative;
    z-index: 1;
    height: var(--main-height);
  }

  .app-footer {
    z-index: 1;

    display: table;
    align-items: center;

    box-sizing: border-box;
    height: var(--footer-height);

    font-size: var(--font-body);
    line-height: normal;

    background-color: var(--bg-color-bright-2);
    border-top: var(--border);
  }

  .csss-layout.slide-left-enter-active,
  .csss-layout.slide-left-leave-active,
  .csss-layout.slide-right-enter-active,
  .csss-layout.slide-right-leave-active {
    transition: all var(--transition-prop);
    transition-property: transform, opacity;
  }
}
</style>
