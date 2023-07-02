<script setup lang="ts">
import { storeToRefs } from "pinia";
import { NMenu, NScrollbar } from "naive-ui";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useGlobalStore } from "@/stores/global.store";

const { activeAsideModule } = storeToRefs(useGlobalStore());
const { push } = useRouter();
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
        @update:value="push"
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

  .aside-menu .n-menu .n-menu-item-content::before {
    inset: 0;
  }

  .aside-menu .n-submenu-children:first-child {
    margin-top: 0;
  }
}
</style>
