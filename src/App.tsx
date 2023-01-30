import { defineComponent } from "vue";
import AppAside from "./components/appAside/appAside";
import AppAsideHeader from "./components/appAsideHeader/AppAsideHeader";
import AppHeader from "./components/appHeader/AppHeader";
import IconPreset from "./components/IconPreset";
import { useApp } from "./composables/app";
import Setting from "./views/setting/Setting";

export default defineComponent({
  name: "App",
  setup: (props) => {
    const { Layout } = useApp();

    return () => {
      return (
        <>
          <IconPreset />
          <c-layout ref={Layout}>
            {{
              aside: () => (
                <>
                  <AppAsideHeader />
                  <AppAside />
                </>
              ),
              header: () => <AppHeader></AppHeader>,
              default: () => <router-view></router-view>,
            }}
          </c-layout>
          <Setting />
        </>
      );
    };
  },
});
