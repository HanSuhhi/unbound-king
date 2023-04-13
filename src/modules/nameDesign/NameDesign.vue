<script setup lang="ts">
import { defineCommonLayout } from "@/composables/components/commonLayout";
import FamilyName from "./components/FamilyName.vue";
import { useNames } from "./composables/names";
import FirstNames from "./components/FirstNames.vue";
import "./name-design.css";
import { ref } from "vue";

const { COMP: Layout } = defineCommonLayout("name-design");
const { code } = useNames();
</script>

<template>
  <base-layout ref="Layout" class="name-design">
    <template #aside>
      <CodeCanvas :code="code" class="code-canvas_design" />
    </template>
    <div class="name-design_parts">
      <family-name />
      <first-names />
    </div>
  </base-layout>
</template>

<style scoped>
.name-design_parts {
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  padding-left: var(--base-margin);
  overflow: auto;
}

.name-design_parts :deep(.title-card) {
  box-sizing: border-box;
  height: fit-content;
  max-height: 100%;
  margin-right: var(--base-margin);
}

.name-design_parts :deep(.title-card:not(:first-child)) {
  margin-bottom: var(--base-margin);
}
</style>
