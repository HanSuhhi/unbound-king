import { useWatcher } from "alova";
import { storeToRefs } from "pinia";
import { patchUserNicknameByEmail } from "@/api/services/users";
import { useUserService } from "@/services/databases/user/user.service";
import { useAuthStore } from "@/stores/auth.store";

export function patchUserNickname() {
  const { updateUserNickname } = useUserService();
  const { email, nickname } = storeToRefs(useAuthStore());

  const { onSuccess, loading } = useWatcher(() => patchUserNicknameByEmail({
    request: { nickname: nickname.value },
    params: { to: email.value }
  }), [nickname], {
    debounce: 2000
  });
  onSuccess(async ({ data: { data } }) => await updateUserNickname(email.value, data));

  return { loading };
}
