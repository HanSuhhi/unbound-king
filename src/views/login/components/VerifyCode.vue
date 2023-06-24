<script setup lang='ts'>
import { h } from "vue";
import type { CountdownTimeInfo } from "naive-ui";
import { NCountdown, NFormItem, NInputNumber } from "naive-ui";
import { useI18n } from "vue-i18n";
import { handleVertificationCode } from "../composables/vertificationCode";
import { i18nLangModel } from "#/composables/i18n/index";
import { useSecond } from "#/composables/time/ms";

const code = defineModel<number>();

const { t } = useI18n();
const { sendVertificationCode, toggleFreeze, isFreeze } = handleVertificationCode();

function countdownRender({ seconds, milliseconds }: CountdownTimeInfo) {
  return h("span", {}, `${seconds}:${milliseconds.toString().slice(0, 1)}`);
}
</script>

<template>
  <n-form-item class="verify-code">
    <n-input-number
      v-model:value="code"
      size="large"
      clearable
      :placeholder="t(i18nLangModel.auth.verifyCodePlaceholder)"
      max="999999"
      min="0"
      :show-button="false"
      class="verify-code_code"
    />
    <type-button
      class="verify-code_button"
      :disabled="isFreeze"
      @click="sendVertificationCode"
    >
      {{ t(i18nLangModel.auth.getVerifyCode) }}
      <n-countdown
        v-if="isFreeze"
        class="ml-mini"
        :duration="useSecond(60)"
        :active="isFreeze"
        :render="countdownRender"
        :precision="1"
        :on-finish="toggleFreeze.bind(null, false)"
      />
    </type-button>
  </n-form-item>
</template>

<style scoped>
@layer copmonent {
  .verify-code {
    --input-width: 75%;
    --gap: 5%;

    display: flex;
    align-items: center;
  }

  .verify-code > :deep(.n-form-item-blank) {
    width: 100%;
  }

  .verify-code_code {
    flex: 1;
  }

  .verify-code_button {
    width: max-content;
    margin-left: var(--gap);
  }
}
</style>
