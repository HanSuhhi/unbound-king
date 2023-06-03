import { defineComponent } from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import packageJson from "/package.json";

export default defineComponent({
  name: "RouterHistory",
  setup: () => {
    return () => {
      return (
        <section class="system-info">
          <h1 class="system-info_title">{import.meta.env.PROJECT_NAME} </h1>
          <span class="system-info_title">v - {packageJson.version} </span>
        </section>
      );
    };
  }
});
