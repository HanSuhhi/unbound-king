import "./destiny-design.css";
import Alert from "@/components/alert/alert";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NationDesign",
  setup: (props) => {
    return () => {
      return (
        <article class="nation-design">
          <Alert class="nation-design_alert">
            <p>1.玩家客户端仅生成导入导出数据，用于设计自定义种族。</p>
            <p>
              2.族裔由<b>种族</b>（不可更改，ex:人族）- <b>种族族裔</b>（ex: 西域人）- <b>种族血统</b>（ex: 拜火族人）构成。
            </p>
          </Alert>
        </article>
      );
    };
  },
});
