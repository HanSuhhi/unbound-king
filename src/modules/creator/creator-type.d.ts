type Creator = {
  translator: Translator;
  description: string;
  plugins: CreatorPlugin[];
  icon: BaseIconName;
};

type CreatorKey = keyof typeof import("./data/index")['DATA_Creators']