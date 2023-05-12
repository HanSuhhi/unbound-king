<script setup lang="ts">
import type { ComputedRef } from "vue";
import { inject } from "vue";
import { defineCommonDialog } from "../../../composables/components/commonDialog";
import IconBlock from "../../baseIcon/components/IconBlock.vue";
import AddIconDialog from "./AddIconDialog.vue";
import Operator from "./Operator.vue";
import TabsBody from "@/components/tabs/TabsBody.vue";
import TabsIconLayout from "@/components/tabs/TabsIconLayout.vue";

defineCommonDialog();

const icons = inject<ComputedRef<GameIcon[]>>("data");
</script>

<template>
  <add-icon-dialog />
  <tabs-body not-body-margin-top>
    <tabs-icon-layout>
      <icon-block v-for="icon in icons" :key="icon.translator[0]" :icon="icon" class="icon-dashboard_block" />
    </tabs-icon-layout>
    <template #operator>
      <operator />
    </template>
  </tabs-body>
</template>

<style scoped>
@layer component {
  .icon-dashboard_block {
    box-sizing: border-box;
  }
}
</style>
