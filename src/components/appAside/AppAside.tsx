import { defineComponent, onMounted } from "vue";
import AuthModule from "../authModule/AuthModule.vue";
import "./app-aside.css";
import AppAsideModule from "./components/AppAsideModule";
import { useAppAside } from "./composables/appAside";

export default defineComponent({
  name: "AppAside",
  setup: (props) => {
    const { Tabs, appAsideModules } = useAppAside();

    return () => {
      return (
        <c-tabs ref={Tabs}>
          {{
            list: () => {
              return appAsideModules.value.map((module) => <AppAsideModule icon={module.icon}></AppAsideModule>);
            },
            "panel-0": () => <AuthModule></AuthModule>,
            "panel-1": () => (
              <>
                <p>1213</p>
              </>
            ),
          }}
        </c-tabs>
      );
    };
  },
});
