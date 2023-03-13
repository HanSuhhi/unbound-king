import { random } from "lodash-es";

type NumberGeneratorProps = {
  limit?: { min: number; max: number };
};

const numberGenerator: GeneratorFunc<number> = ({ limit }: NumberGeneratorProps) => {
  if (limit) return random(limit.min, limit.max);
  return 0;
};

export default { number: numberGenerator };
