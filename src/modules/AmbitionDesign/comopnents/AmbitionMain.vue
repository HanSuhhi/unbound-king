<script setup lang="ts">
import type { Ref } from "vue";
import { inject } from "vue";
import Operator from "./Operator.vue";
import AmbitionBlock from "./AmbitionBlock.vue";
import AmbitionDialog from "./AmbitionDialog.vue";
import TabsBody from "@/components/tabs/TabsBody.vue";
import { defineCommonDialog } from "@/composables/components/commonDialog";

defineCommonDialog();

const ambitions = inject<Ref<Array<Ambition>>>("data")!;
</script>

<template>
  <ambition-dialog />
  <tabs-body>
    <template v-for="ambition of ambitions" :key="ambition.id">
      <ambition-block :ambition="ambition" />
    </template>
    <template #operator>
      <operator />
    </template>
  </tabs-body>
</template>
