<script setup lang='ts'>
import { storeToRefs } from "pinia";
import UserAvator from "./UserAvator.vue";
import Explanation from "@/components/experience/Explanation.vue";
import { useAuthStore } from "@/stores/auth.store";
import ResetInput from "@/components/inputs/ResetInput.vue";

const { email, nickname } = storeToRefs(useAuthStore());
</script>

<template>
  <section class="user-card">
    <user-avator />
    <div class="user-card_title">
      <p class="p-reset user-card_name">
        <reset-input v-model="nickname" :minlength="1" :maxlength="20" class="user-card_input" placeholder="请输入用户名称" />
      </p>
      <p class="p-reset user-card_email">
        {{ email || "emailmetoday@email.com" }}
      </p>
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
@layer component {
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
    content: "";

    position: absolute;
    bottom: 0;
    left: calc(-1 * var(--base-margin));

    width: calc(100% + 2 * var(--base-margin));
    height: var(--border-height);

    background-color: var(--border-color);
  }

  .user-card_title {
    flex: 1;
    margin-left: var(--base-margin);
  }

  .user-card_name {
    display: flex;
    align-items: center;
    font-size: var(--font-title-small);
    color: var(--white);
  }

  .user-card_input {
    color: var(--white);
  }

  .user-card_email {
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
    color: var(--white);
  }

  .user-card_update:active {
    transform: rotate(180deg);
  }
}
</style>
