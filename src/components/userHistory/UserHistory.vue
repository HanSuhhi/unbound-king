<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { NDrawer, NDrawerContent, useMessage } from "naive-ui";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import UserHistoryItem from "./UserHistoryItem.vue";
import { useUserService } from "@/services/databases/user/user.service";
import { useIf } from "#/composables/run/if";
import type { User } from "@/services/databases/user/user.table";
import { getLoginForm, getRememberEmail } from "@/views/login/composables/getters";
import { loginSuccess } from "@/views/login/composables/loginAuth";
import { i18nLangModel } from "#/composables/i18n";
import { useAuthStore } from "@/stores/auth.store";

const active = defineModel<boolean>();
const router = useRouter();
const { info } = useMessage();
const { t } = useI18n();
const { email: userEmail } = storeToRefs(useAuthStore());
const { getAllUsers } = useUserService();

const users = ref<User[]>([]);
onMounted(async () => users.value = await getAllUsers() || []);

function toggleEmail({ token, email, nickname, roles }: User) {
  const [ifHaveToken, ifDontHaveToken] = useIf(token);

  ifHaveToken(() => {
    if (userEmail.value === email) return;

    info(t(i18nLangModel.auth.loginSuccess));
    loginSuccess(email, {
      access_token: token!,
      nickname: nickname!,
      roles: roles!
    }, router);
    active.value = false;
  });

  ifDontHaveToken(() => {
    const rememberEmail = getRememberEmail();
    const loginForm = getLoginForm();

    loginForm.value.form.email = email;
    active.value = false;
    rememberEmail.value = true;
  });
}
</script>

<template>
  <n-drawer
    v-model:show="active"
    class="drawer-right user-history" :width="502" placement="right"
  >
    <n-drawer-content
      :closable="true"
      :title="t(i18nLangModel.userDrawer.title)"
    >
      <template v-if="!users.length">
        <div class="user-history_empty">
          <n-empty :description="t(i18nLangModel.auth.userHistoryEmpty)">
            <template #icon>
              <icon class="user-history_icon" name="question" />
            </template>
          </n-empty>
        </div>
      </template>
      <template v-else>
        <template v-for="user of users" :key="user.email">
          <user-history-item class="user-history_item" :email="user.email" :token="Boolean(user.token)" @click="toggleEmail(user)" />
        </template>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
@layer component {
  .user-history_item {
    margin-top: calc( var(--normal) * 1.4);
  }

  .user-history_empty {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
  }

  .user-history_icon  {
    position: relative;

    animation-name: move-up-down;
    animation-duration: 1.5s;
    animation-timing-function: var(--transition-timing-function);
    animation-iteration-count: infinite;
  }
}
</style>
