export const DATA_Genders: Record<Gender, Translator> = {
  MALE: { key: "male", title: "男" },
  FEMALE: { key: "female", title: "女" },
};

export const DATA_Chases: Record<Chase, TranslatorObj & CanBeGenerated> = {
  DaDao: {
    translator: { key: "dadao", title: "大道" },
    canBeGenerated: true,
  },
  HongYuan: {
    translator: { key: "hongyuan", title: "宏愿" },
    canBeGenerated: true,
  },
  LiZhi: {
    translator: { key: "lizhi", title: "立志" },
    canBeGenerated: true,
  },
  YangJiao: {
    translator: { key: "yangjiao", title: "扬教" },
    canBeGenerated: false,
  },
};

export const DATA_Ages: Record<Age, TranslatorObj & CanBeGenerated> = {
  Childhood: {
    translator: { key: "childhood", title: "幼年" },
    canBeGenerated: false,
  },
  Adolescence: {
    translator: { key: "adolescence", title: "少年" },
    canBeGenerated: true,
  },
  Youth: {
    translator: { key: "youth", title: "青年" },
    canBeGenerated: true,
  },
  Prime: {
    translator: { key: "prime", title: "壮年" },
    canBeGenerated: true,
  },
  Middle: {
    translator: { key: "middle ", title: "中年" },
    canBeGenerated: true,
  },
  Old: {
    translator: { key: "old ", title: "老年" },
    canBeGenerated: true,
  },
  Twilight: {
    translator: { key: "twilight", title: "暮年" },
    canBeGenerated: true,
  },
};
