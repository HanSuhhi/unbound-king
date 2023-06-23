<script setup lang='ts'>
import { NCheckbox, NInput } from "naive-ui";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { HttpStatus } from "@nestjs/common";
import { EMAIL_INPUT_PROPS, useEmailInput } from "../composables/emailInput";
import VerifyCode from "./VerifyCode.vue";
import { i18nLangModel } from "@/locals";
import { postLoginWithEmail } from "@/api/services/auth";
import { useGlobalDialog } from "@/composables/components/globalDialog";

const { email, checkEmailIsRight, emailStatus } = useEmailInput();
const code = ref("");

const { t } = useI18n();

const rememberMe = ref(false);
const policy = ref(false);

async function registration() {
  const { statusCode, data } = await postLoginWithEmail({
    email: email.value!,
    code: Number(code.value),
    loginType: "JHuWYPd9be4E"
  }).send();
  if (statusCode) return;

  console.log(data.access_token);
}

async function handleLogin() {
  const { statusCode, data } = await postLoginWithEmail({
    email: email.value!,
    code: Number(code.value),
    loginType: "9anqHyzvl83l"
  }).send();
  if (statusCode) {
    const { warning } = useGlobalDialog();
    switch (statusCode) {
      case HttpStatus.ACCEPTED:
        return warning({
          title: "注册用户",
          text: "当前邮箱未注册用户，是否自动注册？",
          confirm: registration
        });
      default: break;
    }
  }
}
</script>

<template>
  <section class="login-input">
    <p class="p-reset login-input_title">
      {{ t(i18nLangModel.auth.emailLoginTitle) }}
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
      <verify-code v-model="code" />
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
