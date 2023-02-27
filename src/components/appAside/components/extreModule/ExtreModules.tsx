import { defineComponent } from "vue";
import AppAsideModule from "../AppAsideModule";
import "./extre-modules.css";

export default defineComponent({
  name: "ExtreModules",
  setup: (props) => {
    const setting: AsideModule = {
      key: "setting",
      icon: "i-ic-sharp-settings",
      type: "exter-module",
    };
    return () => {
      return (
        <section class="extre-modules">
          <AppAsideModule module={setting} read={true}></AppAsideModule>
        </section>
      );
    };
  },
});
