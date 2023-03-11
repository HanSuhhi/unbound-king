import CodeCanvasVue from "@/components/codeCanvas/CodeCanvas.vue";
import { defineComponent, provide, ref, computed } from "vue";
import { applyDataToModule } from "../../composables/codeChanged";
import { defineCommonLayout } from "../../composables/components/commonLayout";
import "./attribute-value.css";
import AttributeValueBox from "./components/AttributeValueBox.vue";

export default defineComponent({
  name: "AttributeValue",
  setup: (props) => {
    const { COMP } = defineCommonLayout("attribute-value");

    const attributeValues = ref<AttributeValue[]>([]);
    const codeTemplate = computed(() => ["export const DATA_AttributeValue: AttributeValue[] =", JSON.stringify(attributeValues.value)]);
    const { code } = applyDataToModule(attributeValues, codeTemplate);

    return () => {
      return (
        <c-layout ref={COMP} class="attribute-value">
          {{
            aside: () => <CodeCanvasVue code={code.value} />,
            default: () => <AttributeValueBox />,
          }}
        </c-layout>
      );
    };
  },
});
