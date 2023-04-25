export const buff_test_base: BuffStruct = {
  from: "test",
  tag: ["ambition", "number"],
  target: ["attributes", "int"],
  buffType: "buff",
  description: "「统帅」属性转化「指挥」属性值",
  explanation: "善统帅者，往往拥有异于常人的指挥能力。因此 {{ 1 点<<Attributes.ldr>>可转换为 1 点<<AttributeValues.ld>>}}",
  value: {
    scale: 1
  }
};
