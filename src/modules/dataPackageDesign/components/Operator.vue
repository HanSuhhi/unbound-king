<script setup lang='ts'>
import type { Ref } from "vue";
import { inject } from "vue";
import { useMessage } from "naive-ui";
import { forEach, isEmpty, throttle } from "lodash-es";
import { compressToBase64 } from "lz-string";
import { animationDuration } from "../../../composables/constant/env";
import { cryptoData } from "../composables/cryptoData";
import { encryp } from "../composables/crypto";

const value = inject<Ref<Record<string, []>>>("value");
const message = useMessage();

const build = throttle(() => {
  if (isEmpty(value?.value)) return message.warning("请选择至少一个数据集！");
  const DATA: Dictionary<any> = {};
  forEach(value!.value, (packageNames: string[], datasetName: string) => {
    DATA[datasetName] = [...cryptoData[datasetName].data.values()].filter((datasetItem) => {
      if (packageNames.includes(datasetItem.from)) return true;
      return false;
    });
  });

  const data = encryp(DATA);
  const compressed = compressToBase64(data);

  return encryp(DATA);
}, animationDuration);
</script>

<template>
  <section class="operator">
    <type-button @click="build">
      打包
    </type-button>
  </section>
</template>

<style scoped>
.operator {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--base-margin);
  padding: var(--base-margin);
  background-color: var(--bg-color-bright-2);
  border: var(--border);
  border-radius: var(--border-radius);
}
</style>
