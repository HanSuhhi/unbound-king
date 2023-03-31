import type { Ref } from 'vue';
import { ref, computed } from 'vue';

type BuffValue = [value: number, desc: string]
type BuffValues = Record<string, BuffValue>;

function calcBuffValuesTotal(buffValues: Ref<BuffValues>) {
  return Object.values(buffValues.value).reduce((acc, [value]) => acc + value, 0);
}

export const useNumberModelValue = (baseValue: number) => {
  const buffValue = ref<BuffValues>({});
  const percentValue = ref<BuffValues>({});
  const finalBuffValue = ref<BuffValues>({});

  function setBuffValue(key: string, value: BuffValue): number {
    buffValue.value[key] = value;
    return value[0];
  }

  function setPercentValue(value: BuffValue): number {
    return value[0];
  }

  function setFinalBuffValue(value: BuffValue): number {
    return value[0];
  }

  const value = computed<number>(() => {
    const buffTotal = calcBuffValuesTotal(buffValue);
    const percentTotal = 1 + calcBuffValuesTotal(percentValue);
    const finalBuffTotal = calcBuffValuesTotal(finalBuffValue);
    return (baseValue + buffTotal) * percentTotal + finalBuffTotal;
  });

  return { value, setBuffValue, setPercentValue, setFinalBuffValue };
};

