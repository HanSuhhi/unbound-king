import { defineUniqueId } from "../../../composables/ci/uniqueId";
import type { User } from "./user.table";
import { Boolean, useServiceModel } from "@/services/serviceModel";

export function useUserService() {
  const { add, update, model } = useServiceModel<User>("user");

  const isEmailRegist = async (email: string) => {
    return (await model.where("email").equals(email).first());
  };

  const registUserMessage = async (email: string) => {
    email = email.toLowerCase();
    (await model.where("main").equals(Boolean.True).toArray()).forEach((user) => {
      update(user.id, { main: Boolean.False });
    });
    const registUser = await isEmailRegist(email);
    if (registUser) return await update(registUser.id, { main: Boolean.True });

    const id = Number(defineUniqueId());
    const user: User = { id, email, main: Boolean.True };

    return await add(user);
  };

  const getDefaultMainUser = async () => {
    const user = await model.where("main").equals(Boolean.True).first();
    return user;
  };

  return {
    registUserMessage,
    getDefaultMainUser
  };
}
