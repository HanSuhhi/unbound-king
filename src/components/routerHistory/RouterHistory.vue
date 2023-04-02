<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import { useGlobalStore } from "@/stores/global.store";
import { find } from "lodash-es";
import { storeToRefs } from "pinia";
import { computed, ref, TransitionGroup } from "vue";
import { useRouter } from "vue-router";
import { animationDuration } from "../../composables/constant/env";
import { useAppAsideStore } from "../appAside/store/aside.store";
import { useRouterHistoryStore } from "../appHeader/store/routerHistory.store";
import { onBeforeEnter, onEnter, onLeave } from "./composables/horizontalList";
import { smoothScrollTo } from "./composables/jsAnimation";
import "./router-history.css";

const { activePage } = storeToRefs(useGlobalStore());
const { routes } = storeToRefs(useRouterHistoryStore());
const { pages } = storeToRefs(useAppAsideStore());
const router = useRouter();

const leftBlock = ref<HTMLElement>();
const rightBlock = ref<HTMLElement>();
const routeBlocks = ref<HTMLElement[]>([]);

const index = computed(() =>
  routes.value.findIndex((route) => {
    return route[0] === activePage.value?.title;
  }),
);

router.afterEach((v) => {
  const currentWidth = routeBlocks.value[index.value].clientWidth;
  const beforeTotalWidth = routeBlocks.value.slice(0, index.value).reduce((acc, element) => acc + element.offsetWidth, 0) + currentWidth;
  const routeBox = document.querySelector(".router-history_box")!;
  const routeBlockWidth = routeBox.clientWidth;

  if (beforeTotalWidth > routeBlockWidth) smoothScrollTo(beforeTotalWidth - routeBlockWidth, animationDuration);
  if (beforeTotalWidth > routeBox.scrollLeft) smoothScrollTo(beforeTotalWidth - currentWidth, animationDuration);
});

const routeToPageByTitle = (title: string) => {
  const toPage = find(pages.value, (page) => page.title === title);
  router.push({ name: toPage?.path });
};

const routeToHome = () => {
  router.push({ path: "/" });
};

const routeByDirection = (before?: boolean) => {
  let pageIndex = 0;
  if (before) pageIndex = index.value === 0 ? 0 : index.value - 1;
  else pageIndex = index.value === routes.value.length - 1 ? index.value : index.value + 1;

  const page = routes.value[pageIndex];
  routeToPageByTitle(page[0]);
};

const deleteRouteItem = (targetIndex: number) => {
  const originIndex = index.value;
  if (targetIndex !== originIndex) return routes.value.splice(targetIndex, 1);
  if (targetIndex) routeByDirection(true);
  else if (routes.value.length > 1) routeByDirection();
  else routeToHome();

  routes.value.splice(targetIndex, 1);
};

const closeIndex = ref(1);
</script>

<template>
  <ol relative class="router-history">
    <div ref="leftBlock" class="router-history_block">
      <li class="router-history_item router-history_special" @click="routeByDirection(true)">
        <Icon name="double-left" />
      </li>
      <li class="router-history_item router-history_special router-history_home" @click="routeToHome">
        <Icon name="home" />
      </li>
    </div>
    <div class="router-history_mask" :style="{ left: `${leftBlock?.clientWidth}px` }" />
    <TransitionGroup tag="div" name="horizontal-list" flex-1 class="router-history_block router-history_box" :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
      <li v-for="(route, targetIndex) of routes" ref="routeBlocks" :key="route[0]" :class="{ 'router-history_active': activePage?.title === route[0] }" class="router-history_item router-history_route" @click="routeToPageByTitle(route[0])" @mouseover="closeIndex = targetIndex" @mouseout="closeIndex = -1">
        <icon :name="route[1]" />
        <span :data-name="route[0]" class="router-history_text"> {{ route[0] }} </span>
        <div :style="{ opacity: targetIndex === index ? 1 : targetIndex === closeIndex ? 1 : 0 }" class="router-history_close" @click.stop="deleteRouteItem(targetIndex)">
          <icon name="close" />
        </div>
      </li>
    </TransitionGroup>
    <div class="router-history_mask" data-reversed :style="{ right: `${rightBlock?.clientWidth}px` }" />
    <div ref="rightBlock" class="router-history_block">
      <li class="router-history_item router-history_special" @click="routeByDirection(false)">
        <Icon name="double-right" />
      </li>
    </div>
  </ol>
</template>
