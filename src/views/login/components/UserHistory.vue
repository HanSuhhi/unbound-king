<script setup lang='ts'>
import { NDrawer, NDrawerContent, NEmpty } from "naive-ui";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { isEmpty } from "lodash";
import { useRouter } from "vue-router";
import { getLoginForm, getRememberEmail } from "../composables/getters";
import { useIf } from "../../../../composables/run/if";
import { loginSuccess } from "../composables/loginAuth";
import UserHistoryItem from "./UserHistoryItem.vue";
import type { User } from "@/services/databases/user/user.table";
import { i18nLangModel } from "#/composables/i18n";
import { useUserService } from "@/services/databases/user/user.service";

const active = defineModel<boolean>();
const router = useRouter();

const { t } = useI18n();
const rememberEmail = getRememberEmail();
const { getAllUsers } = useUserService();

const users = ref(import.meta.env.SSR ? [] : await getAllUsers());
const loginForm = getLoginForm();
function toggleEmail({ email, token: userToken, roles: userRoles }: User) {
  const [ifHaveToken, ifDontHaveToken] = useIf(userToken);

  ifHaveToken(loginSuccess.bind(null, userToken!, userRoles!, router));

  ifDontHaveToken(() => {
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
      <template v-if="isEmpty(users)">
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
