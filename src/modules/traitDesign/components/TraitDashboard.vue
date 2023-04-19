<script setup lang='ts'>
import { NPopover } from "naive-ui";
import { ref } from "vue";
import { useDesignData } from "../../../composables/plus/data";
import Operator from "./Operator.vue";
import TraitDialog from "./TraitDialog.vue";
import TabsBody from "@/components/tabs/TabsBody.vue";
import { defineCommonDialog } from "@/composables/components/commonDialog";
import TabsIconLayout from "@/components/tabs/TabsIconLayout.vue";
import IconBlock from "@/components/IconBlock.vue";
import BuffExplanation from "@/components/BuffExplanation.vue";

defineCommonDialog();
const data = useDesignData<Trait>();
const activeData = ref<Trait>();
</script>

<template>
  <trait-dialog />
  <tabs-body not-body-margin-top>
    <tabs-icon-layout>
      <template v-for="trait of data" :key="trait.id">
        <n-popover trigger="hover" placement="bottom">
          <template #trigger>
            <icon-block :icon-path="trait.icon" :translator="trait.translator" @mouseover="activeData = trait" />
          </template>
          <buff-explanation :buff-name="activeData?.id || ''" buff-key="trait" />
        </n-popover>
      </template>
    </tabs-icon-layout>
    <template #operator>
      <operator />
    </template>
  </tabs-body>
</template>
