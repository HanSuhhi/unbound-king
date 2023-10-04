import { Trait } from "#/src/configs/traits/trait.enum";

export const EN_Trait = {
  title: {
    [Trait.Listener]: "listener",
    [Trait.CoinCollector]: "coin conllector",
    [Trait.Claim]: "claim"
  },
  description: {
    [Trait.Listener]: "Enjoy music in peace.HP + 5%",
    [Trait.CoinCollector]: "Like coins.Monster drops gold coins increased by 5%",
    [Trait.Claim]: "keep Calm. Mobility + 1"
  }
};

export const CN_Trait = {
  title: {
    [Trait.Listener]: "聆听者",
    [Trait.CoinCollector]: "硬币收集者",
    [Trait.Claim]: "冷静"
  },
  description: {
    [Trait.Listener]: "宁静的欣赏音乐。HP + 5%",
    [Trait.CoinCollector]: "喜欢硬币。怪物掉落金币增加 5%",
    [Trait.Claim]: "保持冷静，行动力 + 1"
  }
};
