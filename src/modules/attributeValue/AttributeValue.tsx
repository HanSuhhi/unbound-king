import CodeCanvasVue from "@/components/codeCanvas/CodeCanvas.vue";
import { defineComponent, provide } from "vue";
import AttributeValueBox from "./components/AttributeValueBox.vue";
import { defineAttributeValueLayout } from "./composables/attributeLayout";
import "./attribute-value.css";
import { storeToRefs } from "pinia";
import { useAttributeValueStore } from "./store/attribute-value.store";

export default defineComponent({
  name: "AttributeValue",
  setup: (props) => {
    const { COMP, style } = defineAttributeValueLayout();
    const { codeCanvasCode } = storeToRefs(useAttributeValueStore());

    provide("layout-style", style);

    return () => {
      return (
        <c-layout ref={COMP} class="attribute-value">
          {{
            aside: () => <CodeCanvasVue code={codeCanvasCode.value} />,
            default: () => <AttributeValueBox />,
          }}
        </c-layout>
      );
    };
  },
});
