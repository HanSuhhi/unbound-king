import { defineComponent } from "vue";
import Tips from "./components/Tips.vue";
import IconDashboard from "./components/IconDashboard.vue";

export default defineComponent({
  name: "BaseIcon",
  setup: (props) => {
    return () => {
      return (
        <article class="base-icon">
          <Tips class="base-icon_header"/>
          <IconDashboard class="base-icon_main" />
        </article>
      );
    };
  }
});
