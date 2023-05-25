<script setup lang="ts">
import type { Ref } from "vue";
import { inject } from "vue";
import { getCommonDialog } from "../../../composables/components/commonDialog";

const props = defineProps<{ type: AttributeValue["type"] }>();

const { modal } = getCommonDialog();
const type = inject<Ref<AttributeValue["type"]>>("type");

function openDialog() {
  modal.value = true;
  type!.value = props.type;
}
</script>

<template>
  <div @click="openDialog">
    <icon name="plus" style="margin-right: var(--mini);" />
    添加属性值...
  </div>
</template>
