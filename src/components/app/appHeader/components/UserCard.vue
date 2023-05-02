<script setup lang='ts'>
import type { Ref } from "vue";
import { inject, toRefs } from "vue";
import { UserSymbol } from "../app-header.symbol";
import UserAvator from "./UserAvator.vue";
import QuestionExplanation from "@/components/experience/QuestionExplanation.vue";
import Explanation from "@/components/experience/Explanation.vue";
import type { User } from "@/services/databases/user/user.table";
import ResetInput from "@/components/inputs/ResetInput.vue";

const { name, email } = toRefs(inject<Ref<User>>(UserSymbol)!.value);
</script>

<template>
  <section class="user-card">
    <user-avator />
    <div class="user-card_title">
      <p class="p-reset user-card_name">
        <question-explanation>
          用户仅影响打包作者相关，不影响游戏内容
        </question-explanation>
        <reset-input v-model="name" :minlength="1" :maxlength="20" class="user-card_input" placeholder="请输入用户名称" m_r />
      </p>
      <reset-input v-model="email" placeholder="emailmetoday@email.com" class="user-card_email" :maxlength="100" />
    </div>
    <explanation>
      <template #trigger>
        <div class="user-card_update" cursor-pointer>
          <icon name="update" />
        </div>
      </template>
      切换用户
    </explanation>
  </section>
</template>

<style scoped>
.user-card {
  --avator-size: 0.7;
  --border-radius: 60% 40% 40% 20% / 70% 50% 30% 25%;

  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: var(--base-margin);
  padding-bottom: var(--base-margin);
}

.user-card::after {
  position: absolute;
  bottom: 0;
  left: calc(-1 * var(--base-margin));
  width: calc(100% + 2 * var(--base-margin));
  height: var(--border-height);
  background-color: var(--border-color);
  content: "";
}

.user-card_title {
  flex: 1;
  margin-left: var(--base-margin);
}

.user-card_name {
  display: flex;
  align-items: center;
  color: var(--white);
  font-size: var(--font-title-small);
}

.user-card_input {
  color: var(--white);
}

.user-card_email {
  /* stylelint-disable-next-line value-no-vendor-prefix */
  width: -webkit-fill-available;
  color: var(--gray-bright-1);
}

.user-card_update {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: var(--base-margin);
  color: var(--gray-bright-1);
  transition: all var(--transition-prop);
}

.user-card_update:hover {
  transform: rotate(90deg);
}

.user-card_update:active {
  transform: rotate(180deg);
}

.user-card_update:hover {
  color: var(--white);
}
</style>
