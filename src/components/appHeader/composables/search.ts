import { useCsssInput } from "csss-ui";

export const useSearch = () => {
  const { COMP: Search } = useCsssInput({
    state: {
      placeholder: "Search...",
    },
    style: {
      classList: {
        input: ["header-search"],
        inputMain: ["", "header-search__main"],
        header: ["", "header-search__header"],
        footer: ["", "header-footer"],
      },
    },
  });

  return { Search };
};
