import type { User } from "./user.table";
import { defineUniqueId } from "@/composables/ci/uniqueId";
import { Boolean, defineServiceExportFunction, useServiceModel } from "@/services/serviceModel";

function useVersion1() {
  const { add, update, model } = useServiceModel<User>("user");

  const isEmailRegist = async (email: string): Promise<User | undefined> => {
    return (await model.where("email").equals(email).first());
  };

  const registUserMessage = defineServiceExportFunction(async (email: string, token?: string) => {
    email = email.toLowerCase();
    (await model.where("main").equals(Boolean.True).toArray()).forEach((user) => {
      update(user.id, { main: Boolean.False });
    });
    const registUser = await isEmailRegist(email);
    if (registUser) return await update(registUser.id, { main: Boolean.True });

    const id = Number(defineUniqueId());
    const user: User = { id, email, main: Boolean.True, token };

    return await add(user);
  });

  const getDefaultMainUser = defineServiceExportFunction(async () => await model.where("main").equals(Boolean.True).first());

  const getAllUsers = defineServiceExportFunction(async () => await model.toArray());

  const deleteUserMessage = defineServiceExportFunction(async (email: string) => {
    email = email.toLowerCase();
    const user = await isEmailRegist(email);
    if (user) return await model.delete(user.id);
  });

  const updateUserToken = defineServiceExportFunction(async (email: string, token: string) => {
    email = email.toLowerCase();
    const user = await isEmailRegist(email);
    if (user) return await update(user.id, { token });
    else return await registUserMessage(email, token);
  });

  const deleteUserToken = defineServiceExportFunction(async (email: string) => {
    email = email.toLowerCase();
    const user = await isEmailRegist(email);
    if (!user) return;
    await update(user.id, { token: "" });
  });

  return {
    registUserMessage,
    getDefaultMainUser,
    getAllUsers,
    deleteUserMessage,
    updateUserToken,
    deleteUserToken
  };
}

export function useUserService() {
  return useVersion1();
}
