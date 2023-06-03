<script setup lang='ts'>
import { NInput } from "naive-ui";
import { EMAIL_INPUT_PROPS, useEmailInput } from "../composables/emailInput";
import { useBaseI18n } from "../../../locals/index";
import VertificationCode from "./VertificationCode.vue";
import { i18nLangModel } from "@/locals/index";

const { email, checkEmailIsRight } = useEmailInput();
const t = useBaseI18n();
</script>

<template>
  <section class="login-input">
    <h2>{{ t(i18nLangModel.auth.title) }}</h2>
    <n-input
      v-model:value="email"
      :input-props="EMAIL_INPUT_PROPS"
      clearable
      placeholder=""
      @blur="checkEmailIsRight"
    />
    <vertification-code />
  </section>
</template>

<style scoped>
@layer component {
  .login-input {
  }
}
</style>
