import { defineComponent } from "vue";
import Alert from "@/components/Alert.vue";

export default defineComponent({
  name: "DestinyDescription",
  setup: (props) => {
    return () => {
      return <Alert class="destiny-design_alert">
        <p>仅用于设计种族数据，种族固定为 enum</p>
      </Alert>;
    };
  }
});
