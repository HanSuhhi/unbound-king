import { defineComponent, provide, ref } from "vue";
import PackageMain from "./components/PackageMain.vue";
import Operator from "./components/Operator.vue";
import PackageDialogVue from "./components/PackageDialog.vue";
import { choosedPackageSymbol } from "./data-package.symbol";
import { cryptoData } from "./composables/cryptoData";
import TitleDescription from "@/components/TitleDescription.vue";
import { defineCommonDialog } from "@/composables/components/commonDialog";
import { parseObjectToEmptyArrays } from "@/composables/util/object";
import "./data-package-design.css";

export default defineComponent({
  name: "DataPackageDesign",
  setup: () => {
    const choosedPackages = ref<Dictionary<From[]>>(parseObjectToEmptyArrays(cryptoData));
    provide(choosedPackageSymbol, choosedPackages);

    defineCommonDialog();

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
