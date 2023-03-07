import CodeCanvasVue from "@/components/codeCanvas/CodeCanvas.vue";
import { storeToRefs } from "pinia";
import { defineComponent, provide } from "vue";
import { defineCommonLayout } from "../../composables/components/commonLayout";
import "./attribute-value.css";
import AttributeValueBox from "./components/AttributeValueBox.vue";
import { useAttributeValueStore } from "./store/attribute-value.store";

export default defineComponent({
  name: "AttributeValue",
  setup: (props) => {
    const { COMP } = defineCommonLayout("attribute-value");
    const { codeCanvasCode, isChanged } = storeToRefs(useAttributeValueStore());

    provide("changed", isChanged);

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
