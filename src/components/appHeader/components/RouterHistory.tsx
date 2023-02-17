import { defineComponent, computed } from "vue";
import { useRouterHistoryStore } from "../store/routerHistory.store";
import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/stores/global.store";
import { useAppAsideStore } from "@/components/appAside/store/aside.store";
import { find } from "lodash-es";
import { useRouter } from "vue-router";

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
          {routes.value.map((route) => {
            return (
              <li onClick={routeToPageByTitle.bind(this, route)} data-name={route} class={["router-history_item", activePage.value?.title === route ? "router-history_active" : ""]}>
                {route}
              </li>
            );
          })}
        </ol>
      );
    };
  },
});
