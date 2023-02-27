import { defineComponent } from "vue";
// @ts-ignore
import packageJson from "/package.json";

export default defineComponent({
  name: "RouterHistory",
  setup: (props) => {
    return () => {
      return (
        <section class="system-info">
          <span class="system-info_title">{import.meta.env.PROJECT_NAME} </span>
          <span class="system-info_title">v - {packageJson.version} </span>
        </section>
      );
    };
  },
});
