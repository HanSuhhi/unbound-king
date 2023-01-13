import { defineComponent } from "vue";
import { useSearch } from "../composables/search";
import UserMessage from "./UserMessage";

export default defineComponent({
  name: "TopHeader",
  setup: (props) => {
    const { Search } = useSearch();
    return () => {
      return (
        <section class="top-header">
          <c-input ref={Search}>
            {{
              header: () => <div class="i-ri-search-eye-fill"></div>,
            }}
          </c-input>
          <UserMessage />
        </section>
      );
    };
  },
});
