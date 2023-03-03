import Icon from "@/components/icon/Icon";
import { defineComponent } from "vue";

export default defineComponent({
  name: "EthnicityAdd",
  setup: (props) => {
    return () => {
      return (
        <div class="ethnicity-add">
          <Icon icon="i-ic-outline-plus" />
        </div>
      );
    };
  },
});
