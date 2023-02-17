import { useAppAsideStore } from "@/components/appAside/store/aside.store";
import { useGlobalStore } from "@/stores/global.store";
import { find } from "lodash-es";
import { defineStore, storeToRefs } from "pinia";
import { nextTick, ref } from "vue";
import { useRouter } from "vue-router";

const useRouterHistoryStore = defineStore("router-history", () => {
  const routes = ref<string[]>([]);
  const { activePage, activeAsideModule } = storeToRefs(useGlobalStore());
  const { pages } = useAppAsideStore();

  const router = useRouter();
  router.afterEach((to, from) => {
    const toPath = to.name as string;
    const toPage = find(pages, (page) => page.path === toPath);
    if (!toPage) return alert("error");
    const toName = toPage.title;
    if (!routes.value.includes(toName)) routes.value.push(toName);
    activePage.value = toPage;
    activeAsideModule.value = toPage.module;
  });

  return { routes };
});
export { useRouterHistoryStore };
