import CodeCanvasVue from "@/components/codeCanvas/CodeCanvas.vue";
import { defineComponent, provide, ref, computed } from "vue";
import { applyDataToModule } from "../../composables/experience/codeChanged";
import { defineCommonLayout } from "../../composables/components/commonLayout";
import { DATA_Ambitions } from "./data/index";
import AmbitionMain from "./comopnents/AmbitionMain.vue";

export default defineComponent({
  name: "AttributeValue",
  setup: (props) => {
    const { COMP } = defineCommonLayout("attribute-value");

    const ambitions = ref<Dictionary<Ambition>>(DATA_Ambitions);
    const codeTemplate = computed(() => ["export default", JSON.stringify(ambitions.value)]);
    const { code } = applyDataToModule(ambitions, codeTemplate);

    return () => {
      return (
        <base-layout ref={COMP} class="attribute-value page-transition">
          {{
            aside: () => <CodeCanvasVue code={code.value} />,
            default: () => <AmbitionMain />,
          }}
        </base-layout>
      );
    };
  },
});
