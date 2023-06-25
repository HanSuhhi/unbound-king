<script setup lang='ts'>
import { NDrawer, NDrawerContent } from "naive-ui";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { getLoginForm } from "../composables/getters";
import UserHistoryItem from "./UserHistoryItem.vue";
import { i18nLangModel } from "#/composables/i18n";
import { useUserService } from "@/services/databases/user/user.service";

const active = defineModel<boolean>();

const { t } = useI18n();
const { getAllUsers } = useUserService();

const users = ref(await getAllUsers());
const loginForm = getLoginForm();
function toggleEmail(email: string) {
  loginForm.value.form.email = email;
  active.value = false;
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
      <template v-for="{ email } of users" :key="email">
        <user-history-item class="user-history_item" :email="email" @click="toggleEmail(email)" />
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
.user-history_item {
  margin-top: calc( var(--normal) * 1.4);
}
</style>
