import { defineComponent, provide, ref } from "vue";
import PackageMain from "./components/PackageMain.vue";
import Operator from "./components/Operator.vue";
import PackageDialogVue from "./components/PackageDialog.vue";
import TitleDescription from "@/components/TitleDescription.vue";
import "./data-package-design.css";

export default defineComponent({
  name: "DataPackageDesign",
  setup: () => {
    const value = ref<Record<string, []>>({});
    provide("value", value);

    return () => {
      return (
        <article class="data-package-design">
          <TitleDescription title="数据包制作" description="选择对应数据用以生成数据包" />
          <PackageMain />
          <PackageDialogVue />
          <Operator />
        </article>
      );
    };
  }
});
