<script setup lang='ts'>
import { h, onErrorCaptured, onMounted, ref } from "vue";
import type { CountdownTimeInfo } from "naive-ui";
import { NCountdown, NInput } from "naive-ui";
import { useI18n } from "vue-i18n";
import { useRequest } from "alova";
import { useVertificationCode } from "../composables/vertificationCode";
import { i18nLangModel } from "@/locals";
import { getVerificationCode } from "@/api/services/mails";

const { send } = useRequest(getVerificationCode, {
  immediate: false
});

onErrorCaptured(() => {
  console.log(1213);
});

onMounted(send);

const code = ref();
const { t } = useI18n();
const { sendVertificationCode, toggleFreeze, isFreeze } = useVertificationCode();
function countdownRender({ seconds, milliseconds }: CountdownTimeInfo) {
  return h("span", {}, `${seconds}:${milliseconds.toString().slice(0, 1)}`);
}
</script>

<template>
  <div class="verify-code">
    <n-input
      v-model:value="code"
      size="large"
      clearable
      :placeholder="t(i18nLangModel.auth.verifyCodePlaceholder)"
      :maxlength="6"
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
        :duration="60 * 1000"
        :active="isFreeze"
        :render="countdownRender"
        :precision="1"
        :on-finish="toggleFreeze.bind(null, false)"
      />
    </type-button>
  </div>
</template>

<style scoped>
@layer copmonent {
  .verify-code {
    --input-width: 75%;
    --gap: 5%;

    display: flex;
    align-items: center;
  }

  .verify-code_code {
    width: var(--input-width);
  }

  .verify-code_button {
    width: max-content;
    margin-left: var(--gap);
  }
}
</style>
