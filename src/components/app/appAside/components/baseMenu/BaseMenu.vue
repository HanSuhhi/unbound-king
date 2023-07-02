<script setup lang="ts">
import { storeToRefs } from "pinia";
import { NMenu, NScrollbar } from "naive-ui";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useGlobalStore } from "@/stores/global.store";

const { activeAsideModule } = storeToRefs(useGlobalStore());
const { name } = useRoute();

onMounted(() => {
  document.querySelectorAll(".n-menu-item > div").forEach((ele) => {
    ele.setAttribute("cursor-pointer", "");
  });
});
</script>

<template>
  <n-scrollbar trigger="none" class="base-menu">
    <article class="aside-menu">
      <n-menu
        :options="activeAsideModule?.pages"
        :default-value="name as string"
        :default-expand-all="true"
      />
    </article>
  </n-scrollbar>
</template>

<style>
@import url("./styles/aside-menu.css") layer(component);

@layer component {
  .aside-menu .n-menu-item{
    margin: calc(var(--base-margin) * 1.2) 0;
  }

  .aside-menu .n-menu-item > .n-menu-item-content{
    box-sizing: content-box;
    padding: var(--mini) 0;
    padding-right: var(--base-margin);
  }

  .aside-menu .n-submenu-children .n-menu-item:first-child {
    margin-top: 0;
  }

  .aside-menu .n-submenu-children .n-menu-item:last-child {
    margin-bottom: var(--small);
  }
}
</style>
