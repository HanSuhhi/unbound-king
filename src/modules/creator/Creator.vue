<script setup lang="ts">
import CodeCanvas from "@/components/codeCanvas/CodeCanvas.vue";
import { defineCommonLayout } from "../../composables/components/commonLayout";
import CreatorHeader from "./components/CreatorHeader.vue";
import CreatorMain from "./components/CreatorMain";
import { useActiveCreator } from "./composables/activeCreator";
import { useCode } from "./composables/code";
import "./creator.css";

const { COMP } = defineCommonLayout("creator");

const [code] = useCode();
useActiveCreator(code);
</script>

<template>
  <c-layout ref="COMP" class="page-transition">
    <template #aside>
      <CodeCanvas :code="code" />
    </template>
    <c-layout>
      <template #header>
        <CreatorHeader />
      </template>
      <CreatorMain />
    </c-layout>
  </c-layout>
</template>
