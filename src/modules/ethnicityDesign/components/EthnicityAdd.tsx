import Icon from "@/components/Icon.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "EthnicityAdd",
  setup: (props) => {
    return () => {
      return (
        <div class="ethnicity-add">
          <Icon icon="plus" />
        </div>
      );
    };
  },
});
