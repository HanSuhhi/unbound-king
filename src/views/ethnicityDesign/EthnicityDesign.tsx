import { defineComponent, provide } from "vue";
import EthnicityDesignDescription from "./components/Description";
import { defineEthnicityLayout } from "./composables/layout";
import CodeCanvas from "@/components/codeCanvas/CodeCanvas.vue";
import EthnicityMain from "./components/ethnicityMain/EthnicityMain";
import code from "./data/ethnicity.data?raw";
import "./ethnicity-design.css";

export default defineComponent({
  name: "EthnicityDesign",
  setup: (props) => {
    const { COMP, style } = defineEthnicityLayout();
    provide("layout-style", style);

    return () => {
      return (
        <c-layout class="ethnicity-design" ref={COMP}>
          {{
            header: () => <EthnicityDesignDescription />,
            aside: () => <CodeCanvas code={code} />,
            default: () => <EthnicityMain />,
          }}
        </c-layout>
        // <article class="ethnicity-design">
        //   <EthnicityDesignDescription />
        // </article>
      );
    };
  },
});
