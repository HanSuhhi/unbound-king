import { delay } from "lodash-es";
import type { PropType } from "vue";
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AppAsideModule",
  props: {
    module: {
      type: Object as PropType<AsideModule>,
      required: false,
    },
    read: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup: (props) => {
    const router = useRouter();
    const classList = computed<string[]>(() => [props.module!.icon, "app-aside_module"]);

    const routeToPage = (module: AsideModule) => {
      const page = module.pages![0];
      if (page.children) {
        router.push({ name: page.children[0].path });
      } else {
        router.push({ name: page.path });
      }
    };

    const toggleModule = () => {
      const AppAside = document.getElementsByClassName("app-aside")[0] as HTMLElement;
      AppAside.style.setProperty("--transition-delay", ".45s");
      AppAside.style.setProperty("--transition-property", "top");
      // top, opacity;
      delay(() => {
        AppAside.style.setProperty("--transition-property", "top, opacity");
        AppAside.style.setProperty("--transition-delay", "0s");
      }, 450);
    };

    return () => {
      return (
        <div
          class="app-aside_listitem"
          onClick={() => {
            if (props.read) return;
            routeToPage(props.module!);
            toggleModule();
          }}>
          <div class={classList.value} />
        </div>
      );
    };
  },
});
