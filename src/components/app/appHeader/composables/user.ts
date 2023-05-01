import { useUserService } from "@/services/databases/user/user.service";
import type { User } from "@/services/databases/user/user.table";

const { registRandomUser, isEmpty, getMainUser } = useUserService();

export async function loadUser(): Promise<User> {
  let user: User;
  if (await isEmpty()) {
    console.warn("系统未查询到相关用户信息...");
    user = await registRandomUser(true);
    console.warn("默认用户已生成...");
  }
  else {
    console.warn("系统正在获取用户...");
    user = await getMainUser();
  }

  return user;
}
