import { computed, defineComponent, ref } from "vue";
import { defineCommonLayout } from "../../composables/components/commonLayout";
import { DATA } from "../../composables/data";
import { applyDataToModule } from "../../composables/experience/codeChanged";
import AttributeValueBox from "./components/AttributeValueBox.vue";
import CodeCanvasVue from "@/components/codeCanvas/CodeCanvas.vue";
import "./attribute-value.css";

export default defineComponent({
  name: "AttributeValue",
  setup: () => {
    const { COMP } = defineCommonLayout("attribute-value");

    const attributeValues = ref<Array<AttributeValue>>([...DATA.DATA_AttributeValues.values()]);
    const codeTemplate = computed(() => ["export default", JSON.stringify(attributeValues.value)]);
    const { code } = applyDataToModule(attributeValues, codeTemplate);

    return () => {
      return (
        <base-layout ref={COMP} class="attribute-value page-transition">
          {{
            aside: () => <CodeCanvasVue code={code.value} />,
            default: () => <AttributeValueBox />
          }}
        </base-layout>
      );
    };
  }
});
