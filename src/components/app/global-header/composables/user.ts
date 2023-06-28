import type { Ref } from "vue";
import type { User } from "@/services/databases/user/user.table";

async function getDefaultUser(user: Ref<User | undefined>) {
  // if (await isEmpty()) {
  //   console.warn("系统未查询到相关用户信息...");
  //   user.value = await registTourist(true);
  //   console.warn("默认用户已生成...");
  // }
  // else {
  //   console.warn("系统正在获取用户...");
  //   user.value = await getMainUser();
  // }
}
