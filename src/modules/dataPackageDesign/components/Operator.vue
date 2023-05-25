<script setup lang='ts'>
import { NCheckbox } from "naive-ui";
import { useBuild } from "../composables/build";
import { useOperatorCheckboxes } from "../composables/operator";

const { buildDataPackage } = useBuild();
const { all: [allChecked, allIndeterminated] } = useOperatorCheckboxes();
</script>

<template>
  <section class="operator">
    <n-checkbox v-model:checked="allChecked" :indeterminate="allIndeterminated">
      全部选中
    </n-checkbox>
    <type-button @click="buildDataPackage">
      打包
    </type-button>
  </section>
</template>

<style scoped>
@layer component {
  .operator {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: var(--base-margin);
    padding: var(--base-margin);

    background-color: var(--bg-color-bright-2);
    border: var(--border);
    border-radius: var(--border-radius);
  }
}
</style>
