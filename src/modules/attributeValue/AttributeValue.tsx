import CodeCanvasVue from "@/components/codeCanvas/CodeCanvas.vue";
import { defineComponent, provide } from "vue";
import AttributeValueBox from "./components/AttributeValueBox.vue";
import { defineAttributeValueLayout } from "./composables/attributeLayout";
import code from "./data/attrbuteValue.data?raw";
import "./attribute-value.css";

export default defineComponent({
  name: "AttributeValue",
  setup: (props) => {
    const { COMP, style } = defineAttributeValueLayout();
    provide("layout-style", style);

    return () => {
      return (
        <c-layout ref={COMP} class="attribute-value">
          {{
            aside: () => <CodeCanvasVue code={code} />,
            default: () => <AttributeValueBox />,
          }}
        </c-layout>
      );
    };
  },
});
