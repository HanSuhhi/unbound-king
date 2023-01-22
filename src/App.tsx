import { useCsssLayout } from "csss-ui";
import { defineComponent, onMounted, watchEffect } from "vue";
import AppAside from "./components/appAside/appAside";
import AppAsideHeader from "./components/appAsideHeader/AppAsideHeader";
import AppHeader from "./components/appHeader/AppHeader";
import IconPreset from "./components/IconPreset";
import Setting from "./components/setting/Setting";

export default defineComponent({
  name: "App",
  setup: (props) => {
    const { COMP: Layout } = useCsssLayout({
      state: {
        layoutType: "aside",
      },
      style: {
        asideWidthSize: "large",
        classList: {
          layout: ["", "app"],
          header: ["", "app-header"],
          main: ["", "app-main"],
          aside: ["", "app-aside"],
        },
      },
    });
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
