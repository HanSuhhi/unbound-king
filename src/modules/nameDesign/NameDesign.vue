<script setup lang="ts">
import FamilyName from "./components/FamilyName.vue";
import { useNames } from "./composables/names";
import FirstNames from "./components/FirstNames.vue";
import { defineCommonLayout } from "@/composables/components/commonLayout";
import CodeCanvas from "@/components/codeCanvas/CodeCanvas.vue";

const { COMP: Layout } = defineCommonLayout("name-design");
const { code } = useNames();
</script>

<template>
  <base-layout ref="Layout" class="name-design">
    <template #aside>
      <code-canvas :code="code" class="code-canvas_design" />
    </template>
    <div class="name-design_parts">
      <family-name />
      <first-names />
    </div>
  </base-layout>
</template>

<style scoped>
@layer page {
  .name-design_parts {
    overflow: auto;
    display: flex;
    flex-flow: column wrap;

    width: 100%;
    padding-left: var(--base-margin);
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

  .code-canvas_design {
    top: calc(-1 * var(--base-margin));
    left: var(--base-margin);
    height: calc(100% + var(--base-margin)) ;
    border-top: 0;
  }
}
</style>

<style>
@layer page {
  .name-design {
    overflow: auto;
    transition: grid-template var(--transition-prop);
  }

  .name-design_main {
    position: relative;
    left: calc(-1 * var(--base-margin));
    width: calc(100% + var(--base-margin));
    height: calc(var(--main-height) - 2 * var(--base-margin));
  }

  .name-design_main > * {
    height: 100%;
  }

  .name-design_main .title-card {
    max-width: 500px;
  }
}
</style>
