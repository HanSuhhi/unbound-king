<script setup lang='ts'>
import { NModal } from "naive-ui";
import TitleCard from "@/components/titleCard/TitleCard";
import { getCommonDialog } from "@/composables/components/commonDialog";

const slots = defineSlots();
const { modal, updateModal } = getCommonDialog();
</script>

<template>
  <n-modal v-model:show="modal" :mask-closable="false" :trap-focus="false" class="router-view-dialog">
    <title-card class="form-dialog">
      <template #title>
        <slot name="title" />
      </template>
      <template #subtitle>
        <icon cursor-pointer class="form-dialog_close" name="close" @click="updateModal(false)" />
      </template>
      <template v-if="slots.footer" #footer>
        <slot name="footer" />
      </template>
      <slot />
    </title-card>
  </n-modal>
</template>

<style scoped>
@layer component {
  .form-dialog_close {
    font-size: var(--font-title-main);
    transition: all var(--transition-prop);
  }

  .form-dialog_close:hover {
    transform: rotate(180deg);
    color: var(--white);
  }

  .form-dialog_close:active {
    transform: rotate(360deg);
  }
}
</style>
