import CodeCanvasVue from "@/components/codeCanvas/CodeCanvas.vue";
import { defineComponent, provide, ref, computed } from "vue";
import { applyDataToModule } from "../../composables/experience/codeChanged";
import { defineCommonLayout } from "../../composables/components/commonLayout";
import "./attribute-value.css";
import AttributeValueBox from "./components/AttributeValueBox.vue";
import { DATA_AttributeValues } from "./data";

export default defineComponent({
  name: "AttributeValue",
  setup: (props) => {
    const { COMP } = defineCommonLayout("attribute-value");

    const attributeValues = ref<Dictionary<AttributeValue>>(DATA_AttributeValues);
    const codeTemplate = computed(() => ["export default", JSON.stringify(attributeValues.value)]);
    const { code } = applyDataToModule(attributeValues, codeTemplate);

    return () => {
      return (
        <c-layout ref={COMP} class="attribute-value page-transition">
          {{
            aside: () => <CodeCanvasVue code={code.value} />,
            default: () => <AttributeValueBox />,
          }}
        </c-layout>
      );
    };
  },
});
