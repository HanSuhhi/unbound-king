<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { animationDuration } from "../../composables/constant/env";
import { routes } from "../app/appHeader/AppHeader";
import { smoothScrollTo } from "./composables/jsAnimation";
import { onBeforeEnter, onEnter, onLeave } from "./composables/horizontalList";
import { useGlobalStore } from "@/stores/global.store";
import Icon from "@/components/Icon.vue";
import IconButton from "@/components/typeButton/IconButton.vue";
// import "./router-history.css";

const { activePage } = storeToRefs(useGlobalStore());
const router = useRouter();

const routeBlocks = ref<HTMLElement[]>([]);

const index = computed(() =>
  routes.value.findIndex((route) => {
    return route[0] === activePage.value?.path;
  })
);

router.afterEach(() => {
  const currentWidth = routeBlocks.value[index.value]?.getBoundingClientRect().width || 0;
  const beforeTotalWidth = routeBlocks.value.slice(0, index.value).reduce((acc, element) => acc + element.offsetWidth, 0) + currentWidth;
  const routeBox = document.querySelector(".router-history_box")!;
  const routeBlockWidth = routeBox.getBoundingClientRect().width;

  if (beforeTotalWidth > routeBlockWidth) smoothScrollTo(beforeTotalWidth - routeBlockWidth, animationDuration);
  if (beforeTotalWidth > routeBox.scrollLeft) smoothScrollTo(beforeTotalWidth - currentWidth, animationDuration);
});

function routeToPage(path: string) {
  router.push({ path });
}

function routeToHome() {
  router.push({ path: "/" });
}

function routeByDirection(before?: boolean) {
  let pageIndex = 0;
  if (before) pageIndex = index.value === 0 ? 0 : index.value - 1;
  else pageIndex = index.value === routes.value.length - 1 ? index.value : index.value + 1;

  const [path] = routes.value[pageIndex];
  routeToPage(path);
}

function deleteRouteItem(targetIndex: number) {
  const originIndex = index.value;
  if (targetIndex !== originIndex) return routes.value.splice(targetIndex, 1);
  if (targetIndex) routeByDirection(true);
  else if (routes.value.length > 1) routeByDirection();
  else routeToHome();

  routes.value.splice(targetIndex, 1);
}

const closeIndex = ref(1);
</script>

<template>
  <ol relative class="router-history ol-reset">
    <nav class="router-history_block">
      <icon-button class="s-9 m-mini" icon-name="double-left" @click="routeByDirection(true)" />
      <icon-button class="s-9 my-mini" icon-name="double-right" @click="routeByDirection(false)" />
      <icon-button class="s-9 m-mini" icon-name="home" @click="routeToHome" />
    </nav>
    <transition-group tag="div" name="horizontal-list" class="router-history_block router-history_box flex-1" :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
      <template v-for="(route, targetIndex) of routes" :key="route[0]">
        <li ref="routeBlocks" v-paper-ripple cursor-pointer :class="{ 'router-history_active': activePage?.title === route[1] }" class="h-reset router-history_item router-history_route" @click="routeToPage(route[0])" @mouseover="closeIndex = targetIndex" @mouseout="closeIndex = -1">
          <icon :name="route[2]" />
          <h2 :data-name="route[1]" class="h-reset router-history_text">
            {{ route[1] }}
          </h2>
          <div :style="{ opacity: targetIndex === index ? 1 : targetIndex === closeIndex ? 1 : 0 }" class="router-history_close" @click.stop="deleteRouteItem(targetIndex)">
            <icon name="close" />
          </div>
        </li>
      </template>
    </transition-group>
  </ol>
</template>

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

  .router-history_text {
    position: relative;

    display: inline-flex;
    align-items: flex-end;

    margin-left: var(--base-margin);

    transition: var(--transition-prop);
  }

  .router-history_active > .router-history_text::before {
    --clip-begin: 15;
    --clip-width: 40;

    content: attr(data-name);

    position: absolute;

    width: 100%;

    color: var(--main-color);
    white-space: nowrap;

    clip-path: polygon(45% 0, 100% 0, 100% 100%, 10% 100%);

    animation: router-history-active 0.8s;
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
