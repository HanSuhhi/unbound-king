<script setup lang="ts">
import { useHtmlPropLint } from "@/composables/util/htmlPropLint";
import Step from "@/modules/creator/components/Step.vue";
import type { Ref } from "vue";
import { computed, inject } from "vue";
import { DATA_Creator_Plugins } from "../../creatorPlugin/data/index";
import StepController from "./StepController.vue";
import { usePluginFunc } from "../composables/pluginFunc";

const creator = inject<Ref<Creator>>("creator");
const activePlugin = inject<Ref<number>>("plugin-index");

const [deletePlugin, upPlugin, downPlugin] = usePluginFunc();
const canUsePlugins = computed(() => DATA_Creator_Plugins.filter((plugin) => plugin.belong === creator?.value.translator.key));
</script>

<template>
  <article class="creator-steps">
    <transition-group tag="section" class="value-list_main" name="vertical-list">
      <step v-for="_plugin, index of creator?.plugins!" :key="_plugin.translator.key" :plugin="_plugin" :data-active="useHtmlPropLint(index === activePlugin)" @delete-item="deletePlugin(index)" @click="activePlugin = index">
        <template #operator>
          <div class="icon-box">
            <div v-if="index !== 0" class="icon" @click.stop="upPlugin(index)">
              <icon :name="'single-up'" />
            </div>
            <div v-if="index !== creator!.plugins.length - 1" class="icon" @click.up="downPlugin(index)">
              <icon :name="'single-down'" />
            </div>
          </div>
        </template>
      </step>
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

<style scoped>
.icon-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

.icon {
  display: flex;
  margin-right: 1px;
  font-size: var(--font-title-small);
  border-radius: var(--border-radius);
  outline: var(--border);
  place-items: center;
}

.icon:hover {
  color: var(--main-color);
}
</style>
