import { useGlobalStore } from "@/stores/global.store";
import { find } from "lodash-es";
import { storeToRefs } from "pinia";
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useAppAsideStore } from "../appAside/store/aside.store";
import { useRouterHistoryStore } from "../appHeader/store/routerHistory.store";
import "./router-history.css";
import Icon from "@/components/icon/Icon";

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

    const routeToHome = () => {
      router.push({ path: "/" });
    };

    const index = computed(() => routes.value.findIndex((route) => route === activePage.value?.title));
    const last = () => {
      console.log("index: ", index.value);
      // if (index !== 0)
    };

    const next = () => {};

    return () => {
      return (
        <ol class="router-history">
          <div class="router-history_block">
            <li class="router-history_item" onClick={last}>
              <Icon icon="i-ic-outline-keyboard-double-arrow-left" />
            </li>
            <li class="router-history_item" onClick={routeToHome}>
              <Icon icon="i-ic-round-home"></Icon>
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
              <Icon icon="i-ic-outline-keyboard-double-arrow-right" />
            </li>
          </div>
        </ol>
      );
    };
  },
});
