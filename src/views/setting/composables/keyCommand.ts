import { useApplySetting } from "./keycommands/applySetting";
import { useQuitGame } from "./keycommands/quitGame";
import { useResetSetting } from "./keycommands/resetSetting";

export const useKeyCommand = () => {
  const quitDialog = useQuitGame();
  const applySetting = useApplySetting();
  const resetSetting = useResetSetting();

  return { quitDialog, applySetting, resetSetting };
};
