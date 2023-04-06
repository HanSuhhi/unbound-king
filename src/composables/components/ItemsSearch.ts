import { useCsssInput } from "@/components/ui/input";

export const defineItemsSearch = () => ({
  ...useCsssInput({
    state: { placeholder: "关键词搜索..." },
    style: {
      classList: { header: ["", "items_search"] },
    },
  }),
});
