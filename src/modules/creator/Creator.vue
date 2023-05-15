<script setup lang="ts">
import { defineCommonLayout } from "../../composables/components/commonLayout";
import CreatorHeader from "./components/CreatorHeader.vue";
import CreatorMain from "./components/CreatorMain";
import { useActiveCreator } from "./composables/activeCreator";
import { useCode } from "./composables/code";
import CodeCanvas from "@/components/codeCanvas/CodeCanvas.vue";

const { COMP } = defineCommonLayout("creator");

const [code] = useCode();
useActiveCreator(code);
</script>

<template>
  <base-layout ref="COMP" class="page-transition">
    <template #aside>
      <code-canvas :code="code" />
    </template>
    <base-layout>
      <template #header>
        <creator-header />
      </template>
      <creator-main />
    </base-layout>
  </base-layout>
</template>

<style>
@import url("./creator.css") layer(component);
</style>
