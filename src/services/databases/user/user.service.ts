import { useNow } from "@vueuse/core";
import type { User } from "./user.table";
import { Boolean, useServiceModel } from "@/services/serviceModel";

export function useUserService() {
  const serviceModel = useServiceModel<User>("user");
  const { model, add } = serviceModel;

  const getMainUser = async () => {
    const users = await model.where("main").equals(Boolean.True).toArray();
    if (users.length !== 1) throw new Error("主用户数量不为 1 异常");
    console.warn("系统获取用户成功...");
    return users[0];
  };

  const registRandomUser = async (main = false) => {
    const name = `用户${Math.floor(Math.random() * 1000000)}`;
    const avator = useNow().value.getTime().toString();

    const user = {
      name,
      avator,
      email: "emailmetoday@email.com",
      main: main ? Boolean.True : Boolean.False
    };

    return await add(user);
  };

  return {
    ...serviceModel,
    getMainUser,
    registRandomUser
  };
}
