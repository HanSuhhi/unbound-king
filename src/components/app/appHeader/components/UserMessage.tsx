import LifeHash from "@hansuhhi-don/lifehash-vue";
import { useNow } from "@vueuse/core";
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserMessage",
  setup: (props) => {
    const defaultImg = useNow().value.getTime().toString();

    return () => {
      return (
        <article class="user-message">
          <span class="user-message__username">
            <span>Hello, </span>
            <span>DDD</span>
          </span>
          <div class="user-message_avator">
            <span>
              <LifeHash input={defaultImg} />
            </span>
          </div>
        </article>
      );
    };
  },
});
