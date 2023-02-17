import type { PropType } from "vue";
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AppAsideModule",
  props: {
    module: {
      type: Object as PropType<AppAsideModule>,
      required: true,
    },
  },
  setup: (props) => {
    const router = useRouter();
    const classList = computed<string[]>(() => [props.module.icon, "app-aside_module"]);

    const routeToPage = (pagePath: string) => {
      router.push({ name: pagePath });
      console.log(12);
    };

    return () => {
      return (
        <div class="app-aside__list-item" onClick={routeToPage.bind(this, props.module.pages[0].path)}>
          <div class={classList.value} />
        </div>
      );
    };
  },
});
