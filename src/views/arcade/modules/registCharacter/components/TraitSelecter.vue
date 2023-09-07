<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { NFormItem, NSelect } from "naive-ui";
import { ref } from "vue";
import { useTraitOptions } from "../composables/traitOption";
import type { Trait } from "../../../../../../server/modules/traits/enums/trait.enum";
import { i18nLangModel } from "#/composables/i18n/index";
import type { ResponseType_PostRegist } from "@/api/services/character";

const { t } = useI18n();
const traitRef = defineModel<ResponseType_PostRegist["traits"]>();
const { traitOptions } = await useTraitOptions();

const selectDisabled = ref(false);

function watchValue(traits: Trait[]) {
  if (traits.length === 2) traitOptions.value = traitOptions.value.map(option => ({ ...option, disabled: true }));
}
</script>

<template>
  <n-form-item :label="t(i18nLangModel.arcade.regist_character.traits)" path="traits">
    <n-select
      v-model:value="traitRef"
      :disabled="selectDisabled"
      :on-update-value="watchValue"
      multiple
      :options="traitOptions"
    />
  </n-form-item>
</template>
