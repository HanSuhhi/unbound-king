<script setup lang='ts'>
import { NAnchor, NAnchorLink } from "naive-ui";
import { parseBaseSettingToAnchor } from "../composables/anchor";

const { anchorConfig } = parseBaseSettingToAnchor();
</script>

<template>
  <n-anchor
    affix
    :trigger-top="24"
    :top="88"
    style="z-index: 1;"
    :bound="24"
  >
    <n-anchor-link v-for="[title, childrenAnchor] of anchorConfig" :key="title" :title="title" href="#演示">
      <template v-if="childrenAnchor">
        <n-anchor-link v-for="childTitle of childrenAnchor" :key="childTitle" :title="childTitle" href="#演示" />
      </template>
    </n-anchor-link>
  </n-anchor>
</template>
