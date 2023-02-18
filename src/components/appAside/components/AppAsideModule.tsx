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

    const routeToPage = (module: AppAsideModule) => {
      const page = module.pages[0];
      if (page.children) {
        router.push({ name: page.children[0].path });
      } else {
        router.push({ name: page.path });
      }
    };

    return () => {
      return (
        <div class="app-aside__list-item" onClick={routeToPage.bind(this, props.module)}>
          <div class={classList.value} />
        </div>
      );
    };
  },
});
