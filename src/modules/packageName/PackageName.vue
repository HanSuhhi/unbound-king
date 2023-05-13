<script setup lang='ts'>
import { NDynamicInput } from "naive-ui";
import { usePackageNameCodeCanvas } from "./composables/codeCanvas";
import { definePackageNameModel } from "./composables/packageNameModel";
import CodeCanvas from "@/components/codeCanvas/CodeCanvas.vue";
import { defineCommonLayout } from "@/composables/components/commonLayout";
import TitleDescription from "@/components/TitleDescription.vue";

const { COMP } = defineCommonLayout("package-name");

const { code, packageNames } = usePackageNameCodeCanvas();
const { dynamicModel } = definePackageNameModel(packageNames);
</script>

<template>
  <base-layout ref="COMP" class="package-name page-transition">
    <template #aside>
      <code-canvas :code="code" />
    </template>
    <title-description title="包名设计" description="自定义本地文件之后，需手动指定文件的显示名称，否则将默认为文件名为包名" />
    <n-dynamic-input
      v-model:value="dynamicModel"
      class="package-name_inputs mt-bm" preset="pair" key-placeholder="新增包名"
      value-placeholder="新增包值（显示名）"
    />
  </base-layout>
</template>
