import { forEach, map } from "lodash";

export const DATA_AttributeValues = new Map<string, AttributeValue>();

map(import.meta.glob("./*.data.ts", { eager: true }), (module: any) => {
  forEach<AttributeValue>(module.default, (attributeValue) => {
    DATA_AttributeValues.set(attributeValue.translator[0], attributeValue);
  });
});
