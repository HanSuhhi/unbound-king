<script setup lang='ts'>
import { NFormItem } from "naive-ui";
import { inject } from "vue";
import { useRegistCharacterForms } from "../composables/form-events";
import { RegistCharacterFormValue } from "../regist-character.symbol";
import type { useRegistCharacterForm } from "../composables/regist-character-form";
import { i18nLangModel } from "#/composables/i18n/index";
import TypeButton from "@/components/typeButton/TypeButton.vue";
import { useStateStore } from "@/stores/state.store";

const formValue = inject<ReturnType<typeof useRegistCharacterForm>["registCharacterForm"]>(RegistCharacterFormValue)!;
const { randomCharacter, confirmCharacter } = useRegistCharacterForms(formValue);
const { stateToStartGame } = useStateStore();
</script>

<template>
  <n-form-item class="form-buttons">
    <type-button
      v-t="i18nLangModel.arcade.regist_character.back"
      color="blue"
      attr-type="button" class="form-buttons_back"
      @click="stateToStartGame"
    />
    <type-button
      v-t="i18nLangModel.arcade.regist_character.sample_form"
      attr-type="button" @click="randomCharacter"
    />
    <type-button
      v-t="i18nLangModel.arcade.regist_character.confirm"
      attr-type="button"
      @click="confirmCharacter"
    />
  </n-form-item>
</template>

<style scoped>
@layer component {
  .form-buttons button {
    margin-right: var(--base-margin);
  }

  .form-buttons:deep(.n-form-item-blank) {
    justify-content: flex-end;
  }

}
</style>
