import Icon from "@/components/Icon.vue";
import LifeHash from "@hansuhhi-don/lifehash-vue";
import { useNow } from "@vueuse/core";
import { defineComponent } from "vue";
import { useSearch } from "../composables/search";

export default defineComponent({
  name: "UserMessage",
  setup: (props) => {
    const defaultImg = useNow().value.getTime().toString();
    const { Search } = useSearch();

    return () => {
      return (
        <article class="user-message">
          <section class="user-message_search">
            <c-input ref={Search}>
              {{
                header: () => <Icon name="search-eye" />,
              }}
            </c-input>
          </section>
          <section class="user-message__user">
            <span class="user-message__username">
              <span>Hello, </span>
              <span>DDD</span>
            </span>
            <div>
              <span>
                <LifeHash input={defaultImg} />
              </span>
            </div>
          </section>
        </article>
      );
    };
  },
});
