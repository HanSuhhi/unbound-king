<script setup lang="ts">
import Step from "@/components/Step.vue";
import type { Ref } from "vue";
import { inject, computed } from "vue";
import { DATA_Creator_Plugins } from "../../creatorPlugin/data/index";
import StepController from "./StepController.vue";
import { onBeforeEnter, onEnter, onLeave } from "@/composables/transition/transitionFunc";
import { useHtmlPropLint } from "@/composables/htmlPropLint";

const creator = inject<Ref<Creator>>("creator");
const plugin = inject<Ref<CreatorPlugin | null>>("plugin");

const canUsePlugins = computed(() => DATA_Creator_Plugins.filter((plugin) => plugin.belong === creator?.value.translator.key));
</script>

<template>
  <article class="creator-steps">
    <transition-group tag="section" class="creator-steps_main" :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
      <step v-for="_plugin in creator?.plugins!" :key="_plugin.translator.key" :plugin="_plugin" :data-active="useHtmlPropLint(plugin?.translator.key === _plugin.translator.key)" />
    </transition-group>

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
