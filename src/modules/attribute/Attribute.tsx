import CodeCanvasVue from "@/components/codeCanvas/CodeCanvas.vue";
import { applyDataToModule } from "@/composables/codeChanged";
import { computed, defineComponent, ref } from "vue";
import { defineCommonLayout } from "../../composables/components/commonLayout";
import AttributeMain from "./components/AttributeMain.vue";
import { DATA_Attributes } from "./data/index";
import "./attribute.css";

export default defineComponent({
  name: "Attribute",
  setup: (props) => {
    const { COMP } = defineCommonLayout("attribute");

    const data = ref<IdValue<Attribute>>(DATA_Attributes);

    const codeTemplate = computed(() => [
      "const data: Record<string, Attribute> = ",
      JSON.stringify(data.value),
      `\n
export default data;
export type StandardAttributeName = keyof typeof data`,
    ]);
    const { code } = applyDataToModule(data, codeTemplate);

    return () => {
      return (
        <c-layout ref={COMP}>
          {{
            aside: () => <CodeCanvasVue code={code.value} />,
            default: () => <AttributeMain />,
          }}
        </c-layout>
      );
    };
  },
});
