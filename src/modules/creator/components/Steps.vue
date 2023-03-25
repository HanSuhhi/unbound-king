<script setup lang="ts">
import Step from "@/components/Step.vue";
import { useHtmlPropLint } from "@/composables/htmlPropLint";
import type { Ref } from "vue";
import { computed, inject } from "vue";
import { DATA_Creator_Plugins } from "../../creatorPlugin/data/index";
import StepController from "./StepController.vue";

const creator = inject<Ref<Creator>>("creator");
const activePlugin = inject<Ref<number>>("plugin-index");

const canUsePlugins = computed(() => DATA_Creator_Plugins.filter((plugin) => plugin.belong === creator?.value.translator.key));
</script>

<template>
  <article class="creator-steps">
    <section class="creator-steps_main">
      <step v-for="_plugin, index of creator?.plugins!" :key="_plugin.translator.key" :plugin="_plugin" :data-active="useHtmlPropLint(index === activePlugin)" @click="activePlugin = index" />
    </section>
    <section class="creator-steps_footer">
      <step-controller :plugins="canUsePlugins" />
    </section>
  </article>
</template>

<style scoped>
.creator-steps {
  --controller-height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.creator-steps_main {
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.creator-steps_footer {
  display: flex;
  align-items: flex-end;
  height: var(--controller-height);
}
</style>
