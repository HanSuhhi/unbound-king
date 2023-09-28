<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { NFormItem } from "naive-ui";
import { useTraitOption } from "../composables/trait-option";
import { Trait } from "#/server/modules/traits/enums/trait.enum";
import type { ResponseType_PostRegist } from "@/api/services/character";
import TypeButton from "@/components/typeButton/TypeButton.vue";
import { i18nLangModel } from "#/composables/i18n/index";
import TraitTag from "@/components/trait/TraitTag.vue";

const { t } = useI18n();
const traitRef = defineModel<ResponseType_PostRegist["traits"]>();
const { getTraits } = useTraitOption();

async function randomTraits() {
  traitRef.value = await getTraits();
}
</script>

<template>
  <n-form-item :label="t(i18nLangModel.arcade.regist_character.traits)" path="race">
    <div class="trait-tags">
      <trait-tag v-for="tag of traitRef" :key="tag" :tag-name="tag as Trait" />
    </div>
    <type-button v-t="i18nLangModel.arcade.regist_character.get_trait" plain @click="randomTraits" />
  </n-form-item>
</template>

<style scoped>
@layer component {
  .trait-tags {
    display: flex;
  }

  .trait-tags:deep(.trait-tag)  {
    margin-right: var(--base-margin);
  }
}
</style>
