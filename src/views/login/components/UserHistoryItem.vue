<script setup lang='ts'>
import LifeHash from "@hansuhhi-don/lifehash-vue";

defineProps<{
  email: string
  token: boolean
}>();
</script>

<template>
  <section cursor-pointer class="login-user">
    <div class="login-user_head">
      <life-hash class="login-user_avator" :input="email" />
    </div>
    <div class="login-user_message">
      <p class="p-reset login-user_email">
        {{ email }}
      </p>
    </div>
    <div class="login-user_status">
      <div v-if="token" class="login-user_ready">
        <icon name="check" />
      </div>
      <icon class="login-user_right" name="single-right" />
    </div>
  </section>
</template>

<style scoped>
@layer component {
  .login-user {
    display: flex;
    align-items: center;

    padding: var(--base-margin);

    background-color: var(--gray-deep-2);
    border-radius: var(--border-radius);

    transition: var(--transition-prop);
  }

  .login-user:hover {
    filter:sepia(.8);
  }

  .login-user_avator {
    width: 3rem;
    border-radius: 50%;
  }

  .login-user_message {
    flex: 1;
    margin: 0 var(--base-margin);
    font-size: var(--font-title-small);
  }

  .login-user_ready {
    display: flex;
    align-items: center;
    justify-content: center;

    aspect-ratio: 1 / 1;
    padding: var(--mini);

    font-size: calc(var(--normal) * 1.2);
    font-weight: bolder;

    background-color: var(--main-color);
    border-radius: 50%;
  }

  .login-user_status {
    display: flex;
    align-items: center;
  }

  .login-user_right {
    margin-left: var(--base-margin);
    font-size: calc(var(--normal) * 1.4);
  }

  .login-user_email {
    margin-left: var(--base-margin);
    color: var(--white-deep-2);
  }
}
</style>

<style scoped>
.login-user_right {
  color: var(--gray-bright-2);
}

.login-user_ready > .icon {
  color: var(--gray-deep-2);
}
</style>
