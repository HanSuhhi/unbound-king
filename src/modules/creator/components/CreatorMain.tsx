import type { Ref } from "vue";
import { defineComponent, ref, provide, inject } from "vue";
import { defineCommonLayout } from "../../../composables/components/commonLayout";
import Forms from "./Forms.vue";
import Steps from "./Steps.vue";

export default defineComponent({
  name: "CreatorMain",
  setup: (props) => {
    const { COMP } = defineCommonLayout("creator-main", false);
    const creator = inject<Ref<Creator>>("creator");

    const plugin = ref<CreatorPlugin | null>(creator?.value.plugins[0] || null);
    provide("plugin", plugin);

    return () => {
      return (
        <c-layout ref={COMP}>
          {{
            aside: () => <Steps />,
            default: () => <Forms />,
          }}
        </c-layout>
      );
    };
  },
});
