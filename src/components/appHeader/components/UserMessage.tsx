import Icon from "@/components/icon/Icon";
import { defineComponent } from "vue";
import LifeHash from "@hansuhhi-don/lifehash-vue";
import { useNow } from "@vueuse/core";
import { useFunctions } from "../composables/functions";

export default defineComponent({
  name: "UserMessage",
  setup: (props) => {
    const defaultImg = useNow().value.getTime().toString();
    const { funcs } = useFunctions();

    return () => {
      return (
        <article class="user-message">
          <section class="user-message__functions">
            {funcs.value.map((item) => {
              return (
                <div class="user-message__box">
                  <Icon icon={item.icon!} size="small"></Icon>
                </div>
              );
            })}
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
          <section class="user-message__plus user-message__box">
            <Icon icon="i-icon-park-solid-more-four" size="small" />
          </section>
        </article>
      );
    };
  },
});
