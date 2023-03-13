import CodeCanvasVue from "@/components/codeCanvas/CodeCanvas.vue";
import { defineComponent, provide, ref, computed } from "vue";
import { applyDataToModule } from "../../composables/codeChanged";
import { defineCommonLayout } from "../../composables/components/commonLayout";
import "./attribute-value.css";
import AttributeValueBox from "./components/AttributeValueBox.vue";
import { DATA_AttrbuteValues } from "./data/index";

export default defineComponent({
  name: "AttributeValue",
  setup: (props) => {
    const { COMP } = defineCommonLayout("attribute-value");

    const attributeValues = ref<IdValue<AttributeValue>>(DATA_AttrbuteValues);
    const codeTemplate = computed(() => ["export default", JSON.stringify(attributeValues.value)]);
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
