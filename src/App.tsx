import { defineComponent, nextTick, ref } from "vue";
import AppAside from "./components/appAside/appAside";
import AppAsideHeader from "./components/appAside/components/appAsideHeader/AppAsideHeader";
import AppHeader from "./components/appHeader/AppHeader";
import GlobalDialog from "./components/dialog/GlobalDialog";
import IconPreset from "./components/IconPreset";
import { useApp } from "./composables/app";
import Setting from "./views/setting/Setting";

export default defineComponent({
  name: "App",
  setup: (props) => {
    const { Layout } = useApp();

    const iconPreset = ref(true);
    nextTick(() => {
      iconPreset.value = false;
    });

    return () => {
      return (
        <>
          {iconPreset.value && <IconPreset />}
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
          <GlobalDialog />
        </>
      );
    };
  },
});
