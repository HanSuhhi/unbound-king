import { type Ref, onMounted, ref } from "vue";
import { useUserService } from "@/services/databases/user/user.service";

export function initLoginData(loginForm: Ref) {
  const { getDefaultMainUser } = useUserService();
  const fromHistory = ref(false);

  onMounted(async () => {
    const email = (await getDefaultMainUser())?.email;
    if (email) fromHistory.value = true;

    loginForm.value.form.email = email || "";
    loginForm.value.policy = Boolean(email);
  });

  return { fromHistory };
}
