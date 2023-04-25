import { defineComponent } from "vue";
import "./data-package-design.css";
import TitleDescription from "@/components/TitleDescription.vue";

export default defineComponent({
  name: "DataPackageDesign",
  setup: (props) => {
    return () => {
      return (
        <article class="data-package-design">
          <header class="data-package-design_header">
            <TitleDescription title='数据包制作' description="选择对应数据用以生成数据包" />
          </header>
        </article>
      );
    };
  }
});
