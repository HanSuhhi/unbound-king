import { defineUniqueId } from "../../../composables/ci/uniqueId";
import type { User } from "./user.table";
import { Boolean, useServiceModel } from "@/services/serviceModel";

export function useUserService() {
  const serviceModel = useServiceModel<User>("user");
  const { model, add, update } = serviceModel;

  const registRandomUser = async (main = false) => {
    const id = Number(defineUniqueId());
    const name = `用户${id.toString().substring(0, 6)}`;

    const user = {
      id,
      name,
      avator: "",
      email: "",
      main: main ? Boolean.True : Boolean.False
    };

    return await add(user);
  };

  const getMainUser = async () => {
    const users = await model.where("main").equals(Boolean.True).toArray();
    if (users.length !== 1) throw new Error("主用户数量不为 1 异常");
    console.warn("系统获取用户成功...");
    return users[0];
  };

  const updateUser = async (user: User) => {
    return await update(user.id, user);
  };

  return {
    ...serviceModel,
    getMainUser,
    registRandomUser,
    updateUser
  };
}
