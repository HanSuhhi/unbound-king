import { useGlobalStore } from "@/stores/global.store";
import { find } from "lodash-es";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useAppAsideStore } from "../appAside/store/aside.store";
import { useRouterHistoryStore } from "../appHeader/store/routerHistory.store";
import "./router-history.css";

export default defineComponent({
  name: "RouterHistory",
  setup: (props) => {
    const { activePage } = storeToRefs(useGlobalStore());
    const { routes } = storeToRefs(useRouterHistoryStore());
    const { pages } = storeToRefs(useAppAsideStore());
    const router = useRouter();

    const routeToPageByTitle = (title: string) => {
      const toPage = find(pages.value, (page) => page.title === title);
      router.push({ name: toPage?.path });
    };

    return () => {
      return (
        <ol class="router-history">
          <div class="router-history_block">
            <li class="router-history_item">
              <div class="i-ic-outline-keyboard-double-arrow-left"></div>
            </li>
            <li class="router-history_item">
              <div class="i-ic-round-home"></div>
            </li>
            {routes.value.map((route) => {
              return (
                <li onClick={routeToPageByTitle.bind(this, route)} data-name={route} class={["router-history_item", activePage.value?.title === route ? "router-history_active" : ""]}>
                  {route}
                </li>
              );
            })}
          </div>
          <div class="router-history_block">
            <li class="router-history_item">
              <div class="i-ic-outline-keyboard-double-arrow-right"></div>
            </li>
          </div>
        </ol>
      );
    };
  },
});
