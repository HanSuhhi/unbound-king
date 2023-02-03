import type { Auth } from "./auth";
import { storeToRefs } from "pinia";
import { usePlayerStore } from "@/stores/player.store";
import { indexOf } from "lodash-es";
import { ref, watchEffect } from "vue";

export class PageAuth {
  constructor(private module: Auth, private page: AuthPageType, private func: string) {}

  public get ticket() {
    return `${this.module.ticket}_${this.page}_${this.func}`;
  }

  public get effective() {
    const { auth } = usePlayerStore();
    const value = ref(false);
    watchEffect(() => (value.value = auth.in(this.ticket)));

    return value.value;
  }
}
