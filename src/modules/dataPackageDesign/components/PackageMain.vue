<script setup lang='ts'>
import { NGradientText, NTransfer } from "naive-ui";
import type { Ref } from "vue";
import { inject } from "vue";
import { cryptoData } from "../composables/cryptoData";
import { getFromArrFromData } from "../composables/fromArr";
import { useMainGradient } from "@/composables/constant/naiveStyle";

const value = inject<Ref<Record<string, []>>>("value");
</script>

<template>
  <section class="package-main">
    <template v-for="data, key of cryptoData" :key="key">
      <div class="package-main_part">
        <n-gradient-text
          class="package-main_title"
          :gradient="useMainGradient"
        >
          {{ data.translator[1] }}
        </n-gradient-text>
        <n-transfer v-model:value="value![key]" :options="getFromArrFromData(data.data)" />
      </div>
    </template>
  </section>
</template>

<style scoped>
@layer component {
  .package-main {
    overflow: auto;
    display: flex;
    flex-wrap: wrap;

    height: 100%;
    margin-top: var(--base-margin);
    margin-bottom: var(--base-margin);

    border-top: var(--border);
  }

  .package-main_part {
    width: calc(50% - var(--base-margin) / 2);
  }

  .package-main_part:nth-child(odd) {
    margin-right: calc(var(--base-margin) / 2);
  }

  .package-main_part:nth-child(even) {
    margin-left: calc(var(--base-margin) / 2);
  }

  .package-main_title {
    font-size: var(--font-title);
  }
}
</style>
