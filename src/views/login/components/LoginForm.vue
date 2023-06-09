<script setup lang='ts'>
import { NCheckbox, NInput } from "naive-ui";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { EMAIL_INPUT_PROPS, useEmailInput } from "../composables/emailInput";
import VerifyCode from "./VerifyCode.vue";
import { i18nLangModel } from "@/locals";

const { email, checkEmailIsRight, emailStatus } = useEmailInput();
const { t } = useI18n();

const rememberMe = ref(false);
const policy = ref(false);
</script>

<template>
  <section class="login-input">
    <p class="p-reset login-input_title">
      Login With Email
    </p>
    <div class="login-input_email">
      <n-input
        v-model:value="email"
        size="large"
        clearable
        :input-props="EMAIL_INPUT_PROPS"
        :placeholder="t(i18nLangModel.auth.emailPlaceholder)"
        :status="emailStatus"
        class="login-input_input"
        @blur="checkEmailIsRight"
      />
      <verify-code />
      <div class="login-input-choosen">
        <n-checkbox v-model:checked="rememberMe" class="login-input_remember">
          Remember email
        </n-checkbox>
        <n-checkbox v-model:checked="rememberMe" class="login-input_remember ">
          Free login for the next week
        </n-checkbox>
        <a href="" class="login-input_more">Historical account</a>
      </div>
      <n-checkbox v-model:checked="policy" class="login-input_policy">
        I have read and will comply with the applicable rules and regulations
      </n-checkbox>
      <type-button v-paper-ripple cursor-pointer class="button-reset login-operation_login">
        {{ t(i18nLangModel.auth.loginTitle) }}
      </type-button>
    </div>
  </section>
</template>

<style scoped>
@layer component {
  .login-input {
    display: flex;
    flex-direction: column;
  }

  .login-input_email {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .login-input-choosen {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--base-margin);
  }

  .login-input_policy {
    margin-top: var(--base-margin);
  }

  .login-input_input {
    margin-bottom: var(--normal);
  }

  .login-input_more {
    text-align: right;
  }

  .login-input_title {
    margin-bottom: var(--base-margin);
    font-size: var(--font-title-main);
  }
}
</style>

<style scoped>
@layer {
  .login-operation_login {
    --linear-gradient: linear-gradient(55deg, var(--main-color-deep-2) 0%, hsl(288deg 66% 51%) 120%);

    height: 3.5rem;
    margin-top: var(--base-margin);
    font-size: var(--font-title-main);
  }
}
</style>
