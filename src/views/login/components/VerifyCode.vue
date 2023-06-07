<script setup lang='ts'>
import { ref } from "vue";
import { NInput } from "naive-ui";
import { useI18n } from "vue-i18n";
import { i18nLangModel } from "@/locals";

const code = ref();
const { t } = useI18n();
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
    >
      {{ t(i18nLangModel.auth.getVerifyCode) }}
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
