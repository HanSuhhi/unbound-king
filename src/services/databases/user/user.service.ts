import type { User } from "./user.table";
import { defineUniqueId } from "@/composables/ci/uniqueId";
import { Boolean, defineServiceExportFunction, useServiceModel } from "@/services/serviceModel";

export function useUserService() {
  const { add, update, model } = useServiceModel<User>("user");

  const isEmailRegist = async (email: string): Promise<User | undefined> => {
    return (await model.where("email").equals(email).first());
  };

  const registUserMessage = defineServiceExportFunction(async (email: string) => {
    if (import.meta.env.SSR) return null;
    email = email.toLowerCase();
    (await model.where("main").equals(Boolean.True).toArray()).forEach((user) => {
      update(user.id, { main: Boolean.False });
    });
    const registUser = await isEmailRegist(email);
    if (registUser) return await update(registUser.id, { main: Boolean.True });

    const id = Number(defineUniqueId());
    const user: User = { id, email, main: Boolean.True };

    return await add(user);
  });

  const getDefaultMainUser = defineServiceExportFunction(async () => {
    const user = await model.where("main").equals(Boolean.True).first();
    return user;
  });

  const getAllUsers = defineServiceExportFunction(async () => {
    if (import.meta.env.SSR) return null;
    return await model.toArray();
  });

  const deleteUserMessage = defineServiceExportFunction(async (email: string) => {
    email = email.toLowerCase();
    const user = await isEmailRegist(email);
    if (user) return await model.delete(user.id);
  });

  return {
    registUserMessage,
    getDefaultMainUser,
    getAllUsers,
    deleteUserMessage
  };
}
