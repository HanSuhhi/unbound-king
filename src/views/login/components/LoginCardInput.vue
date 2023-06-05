<script setup lang='ts'>
import { NInput } from "naive-ui";
import { useI18n } from "vue-i18n";
import { EMAIL_INPUT_PROPS, useEmailInput } from "../composables/emailInput";
import VerifyCode from "./VerifyCode.vue";
import { i18nLangModel } from "@/locals";

const { email, checkEmailIsRight } = useEmailInput();
const { t } = useI18n();
</script>

<template>
  <section class="login-input">
    <h2 class="h-reset login-input_title" :data-suffix="t(i18nLangModel.auth.loginTitleSuffix)">
      {{ t(i18nLangModel.auth.title) }}
    </h2>
    <div class="login-input_email">
      <n-input
        v-model:value="email"
        :input-props="EMAIL_INPUT_PROPS"
        clearable
        :placeholder="t(i18nLangModel.auth.emailPlaceholder)"
        class="login-input_input"
        @blur="checkEmailIsRight"
      />
      <verify-code />
      一些协议
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
    width: 45%;
    height: 100%;
  }

  .login-input_title {
    position: relative;

    margin-bottom: var(--base-margin);
    padding-bottom: var(--small);

    font-size: var(--font-title-main);

    border-bottom: var(--border);
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

}
</style>

<style scoped>
@import url("../styles/login-input-title.css") layer(component);
@import url("../styles/login-button.css") layer(component);
</style>
