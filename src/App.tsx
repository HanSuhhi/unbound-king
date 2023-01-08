import { useCsssLayout } from "csss-ui";
import { defineComponent, onMounted } from "vue";
import AppAside from "./components/appAside/appAside";
import AppAsideHeader from "./components/appAsideHeader/AppAsideHeader";

export default defineComponent({
  name: "App",
  setup: (props) => {
    const { COMP: Layout } = useCsssLayout({
      style: {
        layoutType: "aside",
        asideWidthSize: "large",
        classList: {
          header: ["", "app-header"],
          main: ["", "app-main"],
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
          <c-layout ref={Layout}>
            {{
              aside: () => (
                <>
                  <AppAsideHeader />
                  <AppAside />
                </>
              ),
              header: () => <>1223</>,
              default: () => <p>asd</p>,
            }}
          </c-layout>
        </>
      );
    };
  },
});
