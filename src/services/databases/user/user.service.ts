import type { ResponseType_PatchUserNicknameByEmail } from "../../../api/services/users";
import type { User } from "./user.table";
import { defineUniqueId } from "@/composables/ci/uniqueId";
import { Boolean, defineServiceExportFunction, useServiceModel } from "@/services/serviceModel";
import type { ResponseType_PostLoginWithEmail } from "@/api/services/auth";
import type { Role } from "#/composables/enum/role.enum";
import { findError } from "@/composables/experience/error";
import { i18nLangModel } from "#/composables/i18n";

function useVersion1() {
  const { add, update, model } = useServiceModel<User>("user");

  async function isEmailRegist(email: string): Promise<User | undefined> {
    return (await model.where("email").equals(email).first());
  }

  const getDefaultMainUser = defineServiceExportFunction(async () => await model.where("main").equals(Boolean.True).first());

  const getAllUsers = defineServiceExportFunction(async () => await model.toArray());

  const deleteUserMessage = defineServiceExportFunction(async (email: string) => {
    email = email.toLowerCase();
    const user = await isEmailRegist(email);
    if (user) return await model.delete(user.id);
  });

  const registUserEmail = defineServiceExportFunction(async (email: string) => {
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

  const storeUserToken = defineServiceExportFunction(async (email: string, loginSuccessResponse: ResponseType_PostLoginWithEmail) => {
    email = email.toLowerCase();
    const user = await isEmailRegist(email);
    if (!user) return findError(i18nLangModel.exception.findUserHistoryIndexDB);

    return await update(user.id, {
      token: loginSuccessResponse.access_token,
      roles: loginSuccessResponse.roles as Role[],
      nickname: loginSuccessResponse.nickname
    });
  });

  const deleteUserToken = defineServiceExportFunction(async (email: string) => {
    email = email.toLowerCase();
    const user = await isEmailRegist(email);
    if (!user) return findError(i18nLangModel.exception.findUserHistoryIndexDB);
    await update(user.id, { token: "", roles: [], nickname: "" });
  });

  const updateUserNickname = defineServiceExportFunction(async (email: string, { nickname }: ResponseType_PatchUserNicknameByEmail) => {
    email = email.toLowerCase();
    const user = await isEmailRegist(email);
    if (!user) return findError(i18nLangModel.exception.findUserHistoryIndexDB);
    await update(user.id, {
      nickname
    });
  });

  return {
    registUserEmail,
    getDefaultMainUser,
    getAllUsers,
    deleteUserMessage,
    storeUserToken,
    deleteUserToken,
    updateUserNickname
  };
}

export function useUserService() {
  return useVersion1();
}
