import { sampleSize } from "lodash";
import { Trait } from "@/configs/traits/trait.enum";

export function useTraitOption() {
  const registTraits: Trait[] = [Trait.Listener, Trait.Claim, Trait.CoinCollector];

  const getTraits = async () => sampleSize(registTraits, 2) as Character["traits"];

  return {
    getTraits
  };
}
