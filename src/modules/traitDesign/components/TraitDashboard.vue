<script setup lang='ts'>
import { ref } from "vue";
import { useDesignData } from "../../../composables/plus/data";
import Operator from "./Operator.vue";
import TraitDialog from "./TraitDialog.vue";
import TabsBody from "@/components/tabs/TabsBody.vue";
import { defineCommonDialog } from "@/composables/components/commonDialog";
import TabsIconLayout from "@/components/tabs/TabsIconLayout.vue";
import BuffExplanation from "@/components/BuffExplanation.vue";
import Explanation from "@/components/experience/Explanation.vue";
import IconBlock from "@/components/IconBlock.vue";

defineCommonDialog();
const data = useDesignData<Trait>();
const activeData = ref<Trait>();

function setCurrentTrait(trait: Trait) {
  activeData.value = trait;
}
</script>

<template>
  <trait-dialog />
  <tabs-body not-body-margin-top>
    <tabs-icon-layout>
      <template v-for="trait of data" :key="trait.id">
        <explanation>
          <template #trigger>
            <icon-block
              v-paper-ripple
              :color="trait.color"
              :icon-path="trait.icon"
              :translator="trait.translator"
              class="relative"
              @mouseover="setCurrentTrait(trait)"
            />
          </template>
          <buff-explanation
            :buff-name="activeData?.id || ''"
            buff-key="trait"
          />
        </explanation>
      </template>
    </tabs-icon-layout>
    <template #operator>
      <operator />
    </template>
  </tabs-body>
</template>
