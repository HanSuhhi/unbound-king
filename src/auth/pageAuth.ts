import type { Auth } from "./auth";
import { storeToRefs } from "pinia";
import { usePlayerStore } from "@/stores/player.store";
import { indexOf } from "lodash-es";
import { ref, watchEffect } from "vue";

export class PageAuth {
  constructor(private module: Auth, private page: string, private func: string) {}

  private get ticket() {
    return `${this.module}_${this.page}_${this.func}`;
  }

  public get auth() {
    const { auths } = storeToRefs(usePlayerStore());
    const value = ref(false);
    watchEffect(() => (value.value = indexOf(auths.value, this.ticket) !== -1));

    return value.value;
  }
}
