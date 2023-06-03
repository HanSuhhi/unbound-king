import type { InputProps } from "naive-ui";
import { ref } from "vue";

export const EMAIL_INPUT_PROPS: InputProps["inputProps"] = {
  type: "email",
  name: "email"
};

export function useEmailInput() {
  const email = ref("");

  const checkEmailIsRight = () => {
    const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
    return re.test(email.value);
  };
  return { email, checkEmailIsRight };
}
