import { usePlayerStore } from "@/stores/player.store";
import { useCsssDrawer } from "csss-ui";
import { defer } from "lodash-es";
import { ref } from "vue";
import { entryDevSettingAuth } from "../../../auth/pages/setting.auth";

export const useSetting = () => {
  const { auth } = usePlayerStore();

  return {};
};
