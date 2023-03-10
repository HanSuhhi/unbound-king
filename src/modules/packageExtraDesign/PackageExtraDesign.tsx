import { defineComponent } from "vue";
// import { decryptData, encryptData } from "./composables/crypto";
import "./composables/crypto";

export default defineComponent({
  name: "PackageExtraDesign",
  setup: (props) => {
    return () => {
      return <div>loading</div>;
    };
  },
});
