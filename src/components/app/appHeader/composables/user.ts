import type { Ref } from "vue";
import { onMounted, provide, ref, watch } from "vue";
import { debounce, isUndefined } from "lodash";
import { UserSymbol } from "../app-header.symbol";
import { useUserService } from "@/services/databases/user/user.service";
import type { User } from "@/services/databases/user/user.table";
import { TRANSITION_DURATION } from "@/composables/constant/env";
import { deep } from "@/composables/plus/watch";

const { registTourist, isEmpty, getMainUser, updateUser } = useUserService();

async function getDefaultUser(user: Ref<User | undefined>) {
  if (await isEmpty()) {
    console.warn("系统未查询到相关用户信息...");
    user.value = await registTourist(true);
    console.warn("默认用户已生成...");
  }
  else {
    console.warn("系统正在获取用户...");
    user.value = await getMainUser();
  }
}

export function loadUser() {
  const user = ref<User>();

  onMounted(() => getDefaultUser(user));
  provide(UserSymbol, user);

  watch(user, debounce(async (newUser: User | undefined, oldUser) => {
    if (!newUser) return;
    if (isUndefined(oldUser)) return;
    await updateUser(newUser);
  }, TRANSITION_DURATION), deep);

  return [user];
}
