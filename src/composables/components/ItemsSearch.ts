import { useCsssInput } from "csss-ui";
export const defineItemsSearch = () => ({
  ...useCsssInput({
    state: { placeholder: "关键词搜索..." },
    style: {
      classList: { header: ["", "items_search"] },
    },
  }),
});