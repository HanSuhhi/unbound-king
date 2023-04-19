<script setup lang="ts">
import { NPopover } from "naive-ui";
import type { ComputedRef } from "vue";
import { inject, ref } from "vue";
import { defineCommonDialog } from "../../../composables/components/commonDialog";
import AddPersonalityDialog from "./AddPersonalityDialog.vue";
import PersonalityBlock from "./personalityBlock.vue";
import Operator from "./Operator.vue";
import BuffExplanation from "@/components/BuffExplanation.vue";
import TabsBody from "@/components/tabs/TabsBody.vue";
import TabsIconLayout from "@/components/tabs/TabsIconLayout.vue";

defineCommonDialog();

const data = inject<ComputedRef<Personality[]>>("data");
const activeData = ref<Personality>();
</script>

<template>
  <add-personality-dialog />
  <tabs-body not-body-margin-top>
    <tabs-icon-layout>
      <template v-for="personality in data" :key="personality.translator[0]">
        <n-popover trigger="hover" placement="bottom">
          <template #trigger>
            <personality-block :personality="personality" class="personality-dashboard_block" @mouseover="activeData = personality" />
          </template>
          <buff-explanation :buff-name="activeData?.id || ''" buff-key="personality" />
        </n-popover>
      </template>
    </tabs-icon-layout>
    <template #operator>
      <operator />
    </template>
  </tabs-body>
</template>
