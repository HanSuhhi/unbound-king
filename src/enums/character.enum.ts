export const DATA_Genders: Record<Gender, Translator> = {
  MALE: { key: "male", title: "男" },
  FEMALE: { key: "female", title: "女" },
};

export const DATA_Chases: Record<Chase, TranslatorObj & CanBeGenerated & NeedDescription> = {
  DaDao: {
    translator: { key: "dadao", title: "大道" },
    canBeGenerated: true,
    description: "道可道，非常道；名可名，非常名。天之道，利而不害。圣人之道，为而不争。",
  },
  HongYuan: {
    translator: { key: "hongyuan", title: "宏愿" },
    canBeGenerated: true,
    description: "放大智光明，照十方世界，地涌金莲华，丈六金身，能变能化，普度众生",
  },
  LiZhi: {
    translator: { key: "lizhi", title: "立志" },
    canBeGenerated: true,
    description: "为天地立心，为生民立命，为往圣继绝学，为万世开太平",
  },
  YangJiao: {
    translator: { key: "yangjiao", title: "扬教" },
    canBeGenerated: false,
    description: "万类霜天，广洒教义。",
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
