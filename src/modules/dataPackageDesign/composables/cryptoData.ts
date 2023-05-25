import { DATA_GameIcons } from "../../gameIcon/data/index";
import { DATA_Traits } from "../../traitDesign/data/index";
import { DATA_Personalities } from "@/modules/personalityDesign/data";
import { DATA_Ambitions } from "@/modules/ambitionDesign/data";
import { DATA_Lineageo } from "@/modules/lineageoDesign/data";

interface CryptoDataDetail {
  from: From
}

export interface CryptoData {
  translator: Translator
  data: Map<string, CryptoDataDetail>
}

export const cryptoData: Dictionary<CryptoData> = {
  Gameicons: {
    translator: ["Gameicons", "游戏图标"],
    data: DATA_GameIcons
  },
  Personalities: {
    translator: ["Personalities", "个性"],
    data: DATA_Personalities
  },
  Traits:
  {
    translator: ["Traits", "特征"],
    data: DATA_Traits
  },
  Ambitions: {
    translator: ["Ambitions", "抱负"],
    data: DATA_Ambitions
  },
  Lineageos: {
    translator: ["Lineageos", "血统"],
    data: DATA_Lineageo
  }
};
