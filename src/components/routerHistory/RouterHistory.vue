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
import "./router-history.css";

const { activePage } = storeToRefs(useGlobalStore());
const router = useRouter();

const leftBlock = ref<HTMLElement>();
const routeBlocks = ref<HTMLElement[]>([]);

const index = computed(() =>
  routes.value.findIndex((route) => {
    return route[0] === activePage.value?.path;
  })
);

router.afterEach(() => {
  const currentWidth = routeBlocks.value[index.value]?.clientWidth || 0;
  const beforeTotalWidth = routeBlocks.value.slice(0, index.value).reduce((acc, element) => acc + element.offsetWidth, 0) + currentWidth;
  const routeBox = document.querySelector(".router-history_box")!;
  const routeBlockWidth = routeBox.clientWidth;

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

const show = ref(false);
setTimeout(() => {
  show.value = true;
}, 1000);
</script>

<template>
  <ol relative class="router-history ol-reset">
    <nav ref="leftBlock" class="router-history_block">
      <icon-button class="m-mini" icon-name="double-left" @click="routeByDirection(true)" />
      <icon-button class="m-mini" icon-name="double-right" @click="routeByDirection(false)" />
      <icon-button class="m-mini" icon-name="home" @click="routeToHome" />
    </nav>
    <div v-if="show" class="router-history_mask" :style="{ left: `${leftBlock?.clientWidth}px` }" />
    <transition-group tag="div" name="horizontal-list" flex-1 class="router-history_block router-history_box" :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
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
