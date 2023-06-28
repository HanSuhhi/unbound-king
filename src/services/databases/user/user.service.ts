import type { User } from "./user.table";
import { defineUniqueId } from "@/composables/ci/uniqueId";
import { Boolean, defineServiceExportFunction, useServiceModel } from "@/services/serviceModel";
import type { Role } from "#/composables/enum/role.enum";

function useVersion1() {
  const { add, update, model } = useServiceModel<User>("user");

  const isEmailRegist = async (email: string): Promise<User | undefined> => {
    return (await model.where("email").equals(email).first());
  };

  const registUserMessage = defineServiceExportFunction(async (email: string, token?: string, roles?: Role[]) => {
    email = email.toLowerCase();
    (await model.where("main").equals(Boolean.True).toArray()).forEach((user) => {
      update(user.id, { main: Boolean.False });
    });
    const registUser = await isEmailRegist(email);
    if (registUser) return await update(registUser.id, { main: Boolean.True });

    const id = Number(defineUniqueId());
    const user: User = { id, email, main: Boolean.True, token, roles };

    return await add(user);
  });

  const getDefaultMainUser = defineServiceExportFunction(async () => await model.where("main").equals(Boolean.True).first());

  const getAllUsers = defineServiceExportFunction(async () => await model.toArray());

  const deleteUserMessage = defineServiceExportFunction(async (email: string) => {
    email = email.toLowerCase();
    const user = await isEmailRegist(email);
    if (user) return await model.delete(user.id);
  });

  const storeUserToken = defineServiceExportFunction(async (email: string, token: string, roles: Role[]) => {
    email = email.toLowerCase();
    const user = await isEmailRegist(email);
    if (user) return await update(user.id, { token });
    else return await registUserMessage(email, token, roles);
  });

  const deleteUserToken = defineServiceExportFunction(async (email: string) => {
    email = email.toLowerCase();
    const user = await isEmailRegist(email);
    if (!user) return;
    await update(user.id, { token: "", roles: [] });
  });

  return {
    registUserMessage,
    getDefaultMainUser,
    getAllUsers,
    deleteUserMessage,
    storeUserToken,
    deleteUserToken
  };
}

export function useUserService() {
  return useVersion1();
}
