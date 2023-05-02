import type { PropType } from "vue";
import { defineComponent } from "vue";
import { useModules } from "./composables/moduleChange";
import Icon from "@/components/Icon.vue";
import ExplanationVue from "@/components/experience/Explanation.vue";

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
    const { routeOut } = useModules(props);

    return () => {
      return (
        <ExplanationVue placement="right">
         {{
           trigger: () => <div
             v-paper-ripple
              cursor-pointer
               class="app-aside_listitem"
               // eslint-disable-next-line @typescript-eslint/no-misused-promises
               onClick={routeOut}>
               <Icon name={props.module!.icon} class="app-aside_module" />
             </div>,
           default: () => <p class='p-reset'>{ props.module?.title}</p>
         }}
        </ExplanationVue>
      );
    };
  }
});
