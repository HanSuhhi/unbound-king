import { useApplySetting } from "./applySetting";
import { useQuitGame } from "./quitGame";

export const useKeyCommand = () => {
  const quitDialog = useQuitGame();
  const applySetting = useApplySetting();

  return { quitDialog, applySetting };
};
