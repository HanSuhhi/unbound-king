import type { PropType } from "vue";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { useModules } from "./composables/moduleChange";
import ExplanationVue from "@/components/experience/Explanation.vue";
import IconButtonVue from "@/components/typeButton/IconButton.vue";

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
    },
    isActive: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  setup: (props) => {
    const { routeOut } = useModules(props);
    const { t } = useI18n();

    return () => {
      return (
        <ExplanationVue placement="right">
          {{
            trigger: () => <IconButtonVue
              active={props.isActive}
              class="app-aside_listitem"
              iconName={props.module!.icon}
              onClick={routeOut}
            />,
            default: () => <p class="p-reset">{t(props.module?.title)}</p>
          }}
        </ExplanationVue>
      );
    };
  }
});
