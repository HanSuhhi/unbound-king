type BuffTag = "attribute" | "number";

type AttributeBuff = {
  explanation?: string,
}

type BuffStruct = {
  tag: Array<BuffTag>,
  target: [keyof Character, ...string],
  description: string,
  buffType: "buff" | "percent" | "final",
  value?: {
    scale?: number = 1;
  }
} & AttributeBuff;

type BuffName = keyof typeof import("./data/index")['DATA_Buffs']

type Buff = ReturnType<typeof import("./buff.model")['useBuff']>

