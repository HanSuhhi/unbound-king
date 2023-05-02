import type { Ref } from "vue";
import { onMounted, provide, ref } from "vue";
import { UserSymbol } from "../app-header.symbol";
import { useUserService } from "@/services/databases/user/user.service";
import type { User } from "@/services/databases/user/user.table";

const { registRandomUser, isEmpty, getMainUser } = useUserService();

async function getDefaultUser(user: Ref<User | undefined>) {
  if (await isEmpty()) {
    console.warn("系统未查询到相关用户信息...");
    user.value = await registRandomUser(true);
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

  return [user];
}
