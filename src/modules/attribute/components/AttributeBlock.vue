<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import TitleCard from "@/components/titleCard/TitleCard";
import { NTooltip } from "naive-ui";
import BuffExplanation from "@/components/BuffExplanation.vue";

defineProps<{ attribute: Attribute }>();
</script>

<template>
  <title-card class="attribute-block">
    <template #title>
      <p class="attribute-block_title">
        <n-tooltip trigger="hover">
          <template #trigger>
            <icon class="attribute-block_icon" :name="attribute.icon" />
          </template>
          <p class="attribute-block_explanation">{{ attribute.description }}</p>
        </n-tooltip>
        {{ attribute.translator.title }} ~ {{ attribute.translator.key }}
      </p>
    </template>
    <template #footer>
      <p class="p-reset attribute-block_description">
        {{ attribute.explanation }}
      </p>
    </template>
    <article class="attribute-block_main">
      <buff-explanation :buff-name="attribute.translator.key" :buff-key="'attribute'" />
    </article>
  </title-card>
</template>

<style scoped>
.attribute-block {
  position: relative;
  top: var(--base-margin);
  display: inline-flex;
  flex-direction: column;
  box-sizing: border-box;
  min-width: calc((100% - 4 * var(--base-margin)) / 5);
  max-width: calc((100% - 4 * var(--base-margin)) / 5);
  height: calc(100% - 2 * var(--base-margin));
  border-radius: var(--border-radius);
  outline: var(--border);
}

.attribute-block:not(:last-child) {
  margin-right: var(--base-margin);
}

.attribute-block_title {
  display: flex;
  align-items: center;
  text-transform: uppercase;
}

.attribute-block_explanation {
  width: 30vw;
}

.attribute-block_icon {
  margin-right: var(--small);
  cursor: pointer;
}

.attribute-block_main {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.attribute-block_description {
  height: 70px;
  overflow: auto;
}
</style>
