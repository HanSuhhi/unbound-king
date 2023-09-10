<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { NPopover } from "naive-ui";
import { i18nLangModel } from "../../../composables/i18n/index";
import { Trait } from "#/server/modules/traits/enums/trait.enum";

const { tagName = "" } = defineProps<{
  tagName: Trait
}>();
const { t } = useI18n();
</script>

<template>
  <n-popover trigger="hover">
    <template #trigger>
      <span class="trait-tag" cursor-help>
        {{ t(i18nLangModel.enum.trait[tagName as Trait]) }}
      </span>
    </template>
    <span>{{ t(i18nLangModel.enum["trait-description"][tagName as Trait]) }}</span>
  </n-popover>
</template>

<style scoped>
.trait-tag {
  position: relative;

  min-width: 6rem;
  padding: 0.3rem 1rem;

  font-size: calc(var(--font-body) * 1.05);
  text-align: center;

  background: linear-gradient(to right,rgb(148 127 32 / 80%) ,  rgb(165 136 77 / 80%),rgb(148 127 32 / 80%));
  border: 1px solid rgb(97 97 97);
  border-radius: calc( var(--mini) / 2);
}
</style>
