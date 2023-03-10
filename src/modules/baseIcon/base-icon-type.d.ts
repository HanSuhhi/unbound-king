type BaseIcon = {
  translator: Translator;
  path: string;
};

type BaseIconName = keyof typeof import("./data/baseIcon.data")["DATA_BaseIcons"];
