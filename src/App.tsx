import { useCsssLayout } from "csss-ui";
import { defineComponent, onMounted, watchEffect } from "vue";
import AppAside from "./components/appAside/appAside";
import AppAsideHeader from "./components/appAsideHeader/AppAsideHeader";
import AppHeader from "./components/appHeader/AppHeader";

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
          <div class="i-material-symbols-view-module" v-show={false}></div>
          <div class="i-carbon-two-factor-authentication" v-show={false}></div>
          <div class="i-mdi-horse-human" v-show={false}></div>
          <div class="i-ant-design-align-left-outlined" v-show={false}></div>
          <div class="i-icon-park-solid-more-four" v-show={false}></div>
          <div class="i-fontisto-bell" v-show={false}></div>
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
        </>
      );
    };
  },
});
