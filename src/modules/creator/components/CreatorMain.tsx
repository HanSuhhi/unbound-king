import type { Ref } from "vue";
import { defineComponent, inject, provide, ref, watchEffect } from "vue";
import { defineCommonLayout } from "../../../composables/components/commonLayout";
import Forms from "./Forms.vue";
import Steps from "./Steps.vue";

export default defineComponent({
  name: "CreatorMain",
  setup: () => {
    const { COMP } = defineCommonLayout("creator-main", false);
    const creator = inject<Ref<Creator>>("creator");

    const activePlugin = ref(0);
    const plugin = ref<CreatorPlugin | null>();

    watchEffect(() => (plugin.value = creator?.value.plugins[activePlugin.value] || null));

    provide("plugin", plugin);
    provide("plugin-index", activePlugin);

    return () => {
      return (
        <base-layout ref={COMP}>
          {{
            aside: () => <Steps />,
            default: () => <Forms />
          }}
        </base-layout>
      );
    };
  }
});
