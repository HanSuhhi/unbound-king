import { defineComponent } from "vue";
import AppAsideModule from "../AppAsideModule";
import "./extre-modules.css";

export default defineComponent({
  name: "ExtreModules",
  setup: (props) => {
    const setting: AsideModule = {
      key: "setting",
      icon: "setting",
      type: "exter-module",
      title: "管理",
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
