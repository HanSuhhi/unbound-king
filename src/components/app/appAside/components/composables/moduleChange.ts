import { delay } from "lodash-es";
import { useRouter } from "vue-router";

export function useModules(props: any) {
  const router = useRouter();
  const routeToPage = async ({ pages }: AsideModule) => {
    const page = pages![0];
    if (page.children) await router.push({ name: page.children[0].path });
    else await router.push({ name: page.path });
  };

  const toggleModule = () => {
    const AppAside = document.getElementsByClassName("app-aside")[0] as HTMLElement;
    AppAside.style.setProperty("--transition-delay", ".45s");
    AppAside.style.setProperty("--transition-property", "top");
    // top, opacity;
    delay(() => {
      AppAside.style.setProperty("--transition-property", "top, opacity");
      AppAside.style.setProperty("--transition-delay", "0s");
    }, Number(import.meta.env.STYLE_ANIMATION_DURATION));
  };

  async function routeOut() {
    if (props.read) return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    await routeToPage(props.module);
    toggleModule();
  }

  return {
    routeOut
  };
}
