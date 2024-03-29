<script setup lang="ts">
import { NConfigProvider, NLoadingBarProvider, NMessageProvider, NNotificationProvider, dateZhCN, zhCN } from "naive-ui";
import { onMounted } from "vue";
import { Prefix } from "../composables/constant/url";
import GlobalDialog from "./components/dialog/global/GlobalDialog.vue";
import { bindNaiveUILayer, defineNaiveTheme } from "./composables/experience/theme/naiveTheme";
import { useCorsor } from "./composables/experience/cursor";
import { provideStaticStyleVariables } from "./composables/constant/transitionDuration";
import GlobalHeader from "./components/app/global-header/GlobalHeader";
import { dialogMessage } from "@/composables/components/globalDialog";
import Noise from "@/components/effects/BackgroundNoise.vue";

const { darkTheme, darkThemeOverrides } = defineNaiveTheme();

onMounted(() => {
  const currentURL = window.location.href;

  if (!currentURL.endsWith(Prefix.Client_Game))
    window.location.href = `${window.location.origin}/${Prefix.Client}/${Prefix.Client_Game}`;
});

provideStaticStyleVariables();
useCorsor();
// disableDefaultKeys();
bindNaiveUILayer();
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

  .n-config-provider {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .n-config-provider > *:last-child {
    flex: 1;
  }
}
</style>
./composables/experience/theme/naiveTheme
