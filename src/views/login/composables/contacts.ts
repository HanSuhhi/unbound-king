import { ref } from "vue";
import type { DescriptionType } from "../types/description-type";
import { EMAIL } from "@/composables/constant/env";

export function useContacts() {
  const contacts = ref<DescriptionType[]>([
    {
      title: "email",
      content: EMAIL
    },
    {
      title: "github",
      content: "https://github.com/HanSuhhi/unbound-king"
    }
  ]);

  return { contacts };
}
