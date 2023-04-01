type BuffTag = "attribute" | "number" | "personality";

type AttributeBuff = {
  explanation?: string,
}

type BuffStruct = {
  from: string,
  tag: Array<BuffTag>,
  target: [keyof Character, ...string],
  description: string,
  buffType: "buff" | "percent" | "final",
  value?: {
    scale?: number = 1;
    increase?: number = 0;
  }
} & AttributeBuff;

type BuffsName = keyof typeof import("./data/index")['DATA_Buffs']

type Buff = ReturnType<typeof import("./buff.model")['useBuff']>

