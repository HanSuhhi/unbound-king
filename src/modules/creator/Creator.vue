<script setup lang="ts">
import CodeCanvas from "@/components/codeCanvas/CodeCanvas.vue";
import { defineCommonLayout } from "../../composables/components/commonLayout";
import { provideLoading } from "../../composables/plus/loading";
import CreatorHeader from "./components/CreatorHeader.vue";
import CreatorMain from "./components/CreatorMain";
import { useActiveCreator } from "./composables/activeCreator";
import { useCode } from "./composables/code";
import "./creator.css";

const { COMP } = defineCommonLayout("creator");

const [code] = useCode();
useActiveCreator(code);

const loading = provideLoading();
</script>

<template>
  <base-layout ref="COMP" v-loading="loading" class="page-transition">
    <template #aside>
      <CodeCanvas :code="code" />
    </template>
    <base-layout>
      <template #header>
        <CreatorHeader />
      </template>
      <CreatorMain />
    </base-layout>
  </base-layout>
</template>
