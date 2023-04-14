export const DATA_Genders: Dictionary<Translator> = {
  MALE: ["male", "男"],
  FEMALE: ["female", "女"]
};

export const DATA_Chases = {
  DaDao: {
    icon: "da-dao",
    translator: ["DaDao", "大道"],
    canBeGenerated: true,
    description: "道可道，非常道；名可名，非常名。天之道，利而不害。圣人之道，为而不争。"
  },
  HongYuan: {
    icon: "hong-yuan",
    translator: ["HongYuan", "宏愿"],
    canBeGenerated: true,
    description: "放大智光明，照十方世界，地涌金莲华，丈六金身，能变能化，普度众生"
  },
  LiZhi: {
    icon: "li-zhi",
    translator: ["LiZhi", "立志"],
    canBeGenerated: true,
    description: "为天地立心，为生民立命，为往圣继绝学，为万世开太平"
  }
};

export const DATA_Ages = {
  Childhood: {
    translator: ["childhood", "幼年"],
    canBeGenerated: false
  },
  Adolescence: {
    translator: ["adolescence", "少年"],
    canBeGenerated: true
  },
  Youth: {
    translator: ["youth", "青年"],
    canBeGenerated: true
  },
  Prime: {
    translator: ["prime", "壮年"],
    canBeGenerated: true
  },
  Middle: {
    translator: ["middle ", "中年"],
    canBeGenerated: true
  },
  Old: {
    translator: ["old ", "老年"],
    canBeGenerated: true
  },
  Twilight: {
    translator: ["twilight", "暮年"],
    canBeGenerated: false
  }
};
