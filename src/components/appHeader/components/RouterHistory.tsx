import { defineComponent } from "vue";
import { useRouterHistoryStore } from "../store/routerHistory.store";

export default defineComponent({
  name: "RouterHistory",
  setup: (props) => {
    const { routes } = useRouterHistoryStore();
    return () => {
      return (
        <ol class="router-history">
          <li>英英英英 </li>
          <li>理理理理 </li>
        </ol>
      );
    };
  },
});
