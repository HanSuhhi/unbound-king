<script setup lang='ts'>
import { NCheckbox, NForm, NFormItem, NInput } from "naive-ui";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { EMAIL_INPUT_PROPS } from "../composables/emailInput";
import { useLoginForm } from "../composables/form";
import { useLoginAuth } from "../composables/loginAuth";
import VerifyCode from "./VerifyCode.vue";
import { i18nLangModel } from "#/composables/i18n/index";

const { t } = useI18n();

const { FormInst, loginForm, loginFormRules } = useLoginForm();
const { handleLogin } = useLoginAuth(loginForm, FormInst);

const rememberMe = ref(false);
const policy = ref(false);
</script>

<template>
  <section class="login-input">
    <p class="p-reset login-input_title">
      {{ t(i18nLangModel.auth.emailLoginTitle) }}
    </p>
    <n-form
      ref="FormInst"
      class="login-input_email"
      :show-label="false"
      :model="loginForm"
      :rules="loginFormRules"
    >
      <n-form-item path="email">
        <n-input
          v-model:value="loginForm.email"
          size="large"
          clearable
          :input-props="EMAIL_INPUT_PROPS"
          :placeholder="t(i18nLangModel.auth.emailPlaceholder)"
          class="login-input_input"
        />
      </n-form-item>
      <verify-code v-model="loginForm.code" path="code" />
      <div class="login-input-choosen">
        <n-checkbox v-model:checked="rememberMe" class="login-input_remember">
          {{ t(i18nLangModel.auth.rememberEmail) }}
        </n-checkbox>
        <n-checkbox v-model:checked="rememberMe" class="login-input_remember ">
          {{ t(i18nLangModel.auth.keepMeSignedIn) }}
        </n-checkbox>
        <a href="" class="login-input_more">{{ t(i18nLangModel.auth.historicalAccount) }}</a>
      </div>
      <n-checkbox v-model:checked="policy" class="login-input_policy">
        {{ t(i18nLangModel.auth.agreePolicy) }}
        <a href="">
          {{ t(i18nLangModel.auth.policy) }}
        </a>
      </n-checkbox>
      <type-button v-paper-ripple cursor-pointer class="button-reset login-operation_login" @click="handleLogin">
        {{ t(i18nLangModel.auth.loginTitle) }}
      </type-button>
    </n-form>
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
