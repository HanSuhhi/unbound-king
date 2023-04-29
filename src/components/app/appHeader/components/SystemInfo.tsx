import { defineComponent } from "vue";
// @ts-expect-error
import packageJson from "/package.json";

export default defineComponent({
  name: "RouterHistory",
  setup: () => {
    return () => {
      return (
        <section class="system-info">
          <span class="system-info_title">{import.meta.env.PROJECT_NAME} </span>
          <span class="system-info_title">v - {packageJson.version} </span>
        </section>
      );
    };
  }
});
