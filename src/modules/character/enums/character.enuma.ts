export const DATA_Genders: Dictionary<Translator> = {
  MALE: ["male", "男"],
  FEMALE: ["female", "女"]
};

export const DATA_Chases = {
  release: {
    icon: "release",
    translator: ["release", "解放"],
    canBeGenerated: true,
    description: "牢笼之外，才是我们最终的归宿"
  },
  immortality: {
    icon: "immortality",
    translator: ["immortality", "永生"],
    canBeGenerated: true,
    description: "\"我们需要永远地寄生在这里\""
  },
  creation: {
    icon: "creation",
    translator: ["creation", "人工智能"],
    canBeGenerated: true,
    description: "清谈无用，创造即是生命意义所在"
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
