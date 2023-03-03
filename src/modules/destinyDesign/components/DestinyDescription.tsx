import Alert from "@/components/alert/alert";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DestinyDescription",
  setup: (props) => {
    return () => {
      return (
        <>
          <Alert class="destiny-design_alert">
            <p>! 仅生成种族数据，以设计自定义种族。</p>
          </Alert>
          <Alert class="destiny-design_alert">
            <p>
              ! 一个完整种族由<b>种族</b>（ex:人族）/ <b>族裔</b>（ex: 西域人）/ <b>血统</b>（ex: 拜火族人）三者构成。
            </p>
          </Alert>
          <Alert type="info" class="destiny-design_alert">
            <p>种族设计应极少设计数量增减</p>
          </Alert>
        </>
      );
    };
  },
});
