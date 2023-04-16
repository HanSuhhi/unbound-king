import { computed, defineComponent, ref } from "vue";
import { defineCommonLayout } from "../../composables/components/commonLayout";
import AttributeMain from "./components/AttributeMain.vue";
import { DATA_Attributes } from "./data/index";
import { applyDataToModule } from "@/composables/experience/codeChanged";
import CodeCanvasVue from "@/components/codeCanvas/CodeCanvas.vue";

export default defineComponent({
  name: "Attribute",
  setup: () => {
    const { COMP } = defineCommonLayout("attribute");

    const data = ref([...DATA_Attributes.values()]);
    const typeName = computed(() => data.value.map(attribute => `"${attribute.translator[0]}"`).join("|"));

    const codeTemplate = computed(() => [
      "const data: Attribute[] = ",
      JSON.stringify(data.value),
      "\n\nexport default data;",
      `\nexport type SubAttributeName = ${typeName.value}`
    ]);
    const { code } = applyDataToModule(data, codeTemplate);

    return () => {
      return (
        <base-layout ref={COMP}>
          {{
            aside: () => <CodeCanvasVue code={code.value} />,
            default: () => <AttributeMain />
          }}
        </base-layout>
      );
    };
  }
});
