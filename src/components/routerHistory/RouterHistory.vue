<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { Prefix } from "../../../composables/constant/url";
import { onBeforeEnter, onEnter, onLeave } from "./composables/horizontalList";
import Icon from "@/components/Icon.vue";
import IconButton from "@/components/typeButton/IconButton.vue";
import MainGradient from "@/components/text/MainGradient.vue";
import { useDevStore } from "@/stores/dev.store";

const { push } = useRouter();
const route = useRoute();
const { t } = useI18n();

const routeBlocks = ref<HTMLElement[]>([]);
const { routes, activePage } = storeToRefs(useDevStore());

const index = computed(() =>
  routes.value.findIndex((route) => {
    return route[0] === activePage.value?.key;
  })
);

function routeToHome() {
  push({ name: Prefix.Client_Dev_Default });
}

function routeByDirection(before?: boolean) {
  let pageIndex = 0;
  if (before) pageIndex = index.value === 0 ? 0 : index.value - 1;
  else pageIndex = index.value === routes.value.length - 1 ? index.value : index.value + 1;

  const [path] = routes.value[pageIndex];
  push({ name: path });
}

function deleteRouteItem(targetIndex: number) {
  if (targetIndex !== index.value) return routes.value.splice(targetIndex, 1);
  if (targetIndex) {
    routeByDirection(true);
  }
  else if (routes.value.length > 1) {
    routeByDirection();
  }
  else {
    if (route.name === Prefix.Client_Dev_Default) return;
    routeToHome();
  }

  routes.value.splice(targetIndex, 1);
}

const closeIndex = ref(1);
</script>

<template>
  <ol relative class="router-history ol-reset">
    <nav class="router-history_block">
      <icon-button class="s-9 m-mini" icon-name="double-left" @click="routeByDirection(true)" />
      <icon-button class="s-9 my-mini" icon-name="double-right" @click="routeByDirection()" />
      <icon-button class="s-9 m-mini" icon-name="home" @click="routeToHome" />
    </nav>
    <transition-group
      tag="div"
      name="horizontal-list"
      class="router-history_block router-history_box"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <template v-for="(route, targetIndex) of routes" :key="route[0]">
        <li
          ref="routeBlocks"
          v-paper-ripple
          cursor-pointer
          :class="{ 'router-history_active': activePage?.key === route[0] }"
          class="h-reset router-history_item router-history_route"
          @click="push(route[0])"
          @mouseover="closeIndex = targetIndex"
          @mouseout="closeIndex = -1"
        >
          <icon :name="route[2]" />
          <h2 :data-name="route[1]" class="h-reset router-history_text">
            <component :is="activePage?.key === route[0] ? MainGradient : 'span'">
              {{ t(route[1]) }}
            </component>
          </h2>
          <div
            :style="{ opacity: targetIndex === index ? 1 : targetIndex === closeIndex ? 1 : 0 }"
            class="router-history_close"
            @click.stop="deleteRouteItem(targetIndex)"
          >
            <icon name="close" />
          </div>
        </li>
      </template>
    </transition-group>
  </ol>
</template>

<style>
@layer page {
  .app-header {
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100vw;

    background-color: var(--bg-color-bright-1);
    border-bottom: var(--border);
  }
}
@layer component {
  .router-history_box {
    display: flex;
    flex: 1;
  }
}
</style>

<style scoped>
@layer component {
  .router-history {
    display: flex;
    justify-content: space-between;

    height: var(--header-block-height);
    min-height: 0;
    margin-left: var(--aside-width);
    margin-block-start: 0;
    margin-block-end: 0;

    font-size: var(--font-body-small);

    filter: brightness(0.85);
  }

  .router-history_block {
    overflow: auto;
    display: flex;
  }

  .router-history_item {
    position: relative;

    display: flex;
    align-items: center;

    width: fit-content;
    padding: var(--small) var(--normal);

    font-weight: bold;
    line-height: initial;
    color: var(--gray-bright-2);
    white-space: nowrap;
  }

  .router-history_item:hover {
    background-color: var(--gray-deep-2);
  }

  .router-history_item > .icon {
    font-size: var(--normal);
  }

  .router-history_close {
    position: relative;
    z-index: 9;
    left: var(--base-margin);

    display: flex;
    align-items: center;

    font-size: var(--normal);

    border-radius: 50%;
  }

  .router-history_close:hover {
    background-color: var(--gray);
  }

  .router-history_active,
  .router-history_active:hover {
    background-color: var(--bg-color);
  }

  .router-history_active h2 span{
    font-weight: bold;
  }

  .router-history_text {
    position: relative;

    display: inline-flex;
    align-items: flex-end;

    margin-left: var(--base-margin);

    transition: var(--transition-prop);
  }
}
@layer base {
  @keyframes router-history-active {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }
}
</style>
