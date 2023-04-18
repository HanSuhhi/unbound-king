import "./destiny-design.css";
import { computed, defineComponent, ref } from "vue";
import DestinyMain from "./components/DestinyMain.vue";
import data from "./data/destiny.data";
import CodeCanvas from "@/components/codeCanvas/CodeCanvas.vue";
import { applyDataToModule } from "@/composables/experience/codeChanged";
import { defineCommonLayout } from "@/composables/components/commonLayout";

export default defineComponent({
  name: "DestinyDesign",
  setup: () => {
    const { COMP } = defineCommonLayout("destiny-design");

    const destinyValues = ref<Array<Destiny>>(data);
    const codeTemplate = computed(() => ["export default <Destiny[]> ", JSON.stringify(destinyValues.value)]);
    const { code } = applyDataToModule(destinyValues, codeTemplate);

    return () => {
      return (
        <base-layout class="destiny-design" ref={COMP}>
          {{
            aside: () => <CodeCanvas code={code.value} />,
            default: () => <DestinyMain />
          }}
        </base-layout>
      );
    };
  }
});
