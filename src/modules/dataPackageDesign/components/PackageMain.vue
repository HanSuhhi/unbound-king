<script setup lang='ts'>
import { NTransfer } from "naive-ui";
import type { Ref } from "vue";
import { inject } from "vue";
import { cryptoData } from "../composables/cryptoData";
import { getFromArrFromData } from "../composables/fromArr";
import { choosedPackageSymbol } from "../data-package.symbol";
import MainGradient from "@/components/text/MainGradient.vue";

const value = inject<Ref<Dictionary<From[]>>>(choosedPackageSymbol);
</script>

<template>
  <section class="package-main">
    <template v-for="data, key of cryptoData" :key="key">
      <div class="package-main_part">
        <main-gradient
          class="package-main_title"
        >
          {{ data.translator[1] }}
        </main-gradient>
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
    padding-top: var(--base-margin);

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
