import "./destiny-design.css";
import { defineComponent, provide } from "vue";
import DestinyDescription from "./components/DestinyDescription";
import DestinyMain from "./components/DestinyMain.vue";
import CodeCanvas from "@/components/codeCanvas/CodeCanvas.vue";
import { defineLayout } from "./composables/layout";
import code from "./data/destiny.data?raw";

export default defineComponent({
  name: "DestinyDesign",
  setup: (props) => {
    const { COMP, style } = defineLayout();

    provide("layout-style", style);
    return () => {
      return (
        <c-layout class="destiny-design" ref={COMP}>
          {{
            header: () => <DestinyDescription />,
            aside: () => <CodeCanvas code={code} />,
            default: () => <DestinyMain />,
          }}
        </c-layout>
      );
    };
  },
});
