import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

const useRouterHistoryStore = defineStore("router-history", () => {
  const routes = ref<string[]>([]);

  const router = useRouter();
  router.beforeEach((to, from) => {
    const toName = to.name;
    const fromName = from.name;
  });

  return { routes };
});
export { useRouterHistoryStore };
