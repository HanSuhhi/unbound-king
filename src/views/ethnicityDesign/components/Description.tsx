import Alert from "@/components/alert/alert";
import { defineComponent } from "vue";

export default defineComponent({
  name: "EthnicityDesignDescription",
  setup: (props) => {
    return () => {
      return (
        <>
          <Alert class="ethnicity-design_alert">
            <p>族裔应为一个区域性或者某类特征作为划分的细类种族。但不应为一个详细的种族名称，详细的名称应该放在血统中。</p>
          </Alert>
        </>
      );
    };
  },
});
