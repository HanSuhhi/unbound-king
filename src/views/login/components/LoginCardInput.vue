<script setup lang='ts'>
import { NCheckbox, NInput } from "naive-ui";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { EMAIL_INPUT_PROPS, useEmailInput } from "../composables/emailInput";
import VerifyCode from "./VerifyCode.vue";
import { i18nLangModel } from "@/locals";

const { email, checkEmailIsRight } = useEmailInput();
const { t } = useI18n();

const rememberMe = ref(false);
const policy = ref(false);
</script>

<template>
  <section class="login-input">
    <div class="login-input_email">
      <n-input
        v-model:value="email"
        size="large"
        :input-props="EMAIL_INPUT_PROPS"
        clearable
        :placeholder="t(i18nLangModel.auth.emailPlaceholder)"
        class="login-input_input"
        @blur="checkEmailIsRight"
      />
      <verify-code />
      <n-checkbox v-model:checked="rememberMe" class="login-input_remember">
        Remember me
      </n-checkbox>
      <n-checkbox v-model:checked="policy" class="login-input_policy">
        I have read and will comply with the applicable rules and regulations.
      </n-checkbox>
    </div>
    <button v-paper-ripple cursor-pointer class="button-reset login-operation_login">
      {{ t(i18nLangModel.auth.loginTitle) }}
    </button>
  </section>
</template>

<style scoped>
@layer component {
  .login-input {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .login-input_email {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }

  .login-input_input {
    margin-bottom: var(--base-margin);
  }

  .login-input_remember {
    margin-top: var(--base-margin);
  }

  .login-input_policy {
    margin-top: var(--base-margin);
  }
}
</style>

<style scoped>
@import url("../styles/login-button.css") layer(component);
</style>
