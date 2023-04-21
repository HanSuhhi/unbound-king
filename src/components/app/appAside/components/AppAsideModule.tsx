import { delay } from "lodash-es";
import type { PropType } from "vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { NTooltip } from "naive-ui";
import Icon from "@/components/Icon.vue";

export default defineComponent({
  name: "AppAsideModule",
  props: {
    module: {
      type: Object as PropType<AsideModule>,
      required: false
    },
    read: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  setup: (props) => {
    const router = useRouter();
    const routeToPage = async (module: AsideModule) => {
      const page = module.pages![0];
      if (page.children) await router.push({ name: page.children[0].path });
      else await router.push({ name: page.path });
    };

    const toggleModule = () => {
      const AppAside = document.getElementsByClassName("app-aside")[0] as HTMLElement;
      AppAside.style.setProperty("--transition-delay", ".45s");
      AppAside.style.setProperty("--transition-property", "top");
      // top, opacity;
      delay(() => {
        AppAside.style.setProperty("--transition-property", "top, opacity");
        AppAside.style.setProperty("--transition-delay", "0s");
      }, Number(import.meta.env.ANIMATION_DURATION));
    };

    async function routeOut() {
      if (props.read) return;
      await routeToPage(props.module!);
      toggleModule();
    }

    return () => {
      return (
        <NTooltip placement="right" >
          {{
            trigger: () => <div
                class="app-aside_listitem"
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={routeOut}>
                <Icon name={props.module!.icon} class="app-aside_module" />
              </div>,
            default: () => <p class='p-reset'>{ props.module?.title}</p>
          }}
          </NTooltip>
      );
    };
  }
});
