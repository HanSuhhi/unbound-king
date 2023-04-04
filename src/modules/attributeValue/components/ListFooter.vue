<script setup lang='ts'>
import type { useCsssDialog } from 'csss-ui';
import type { Ref } from 'vue';
import { inject } from 'vue';

const props = defineProps<{ type: AttributeValue["type"] }>();

const state = inject<ReturnType<typeof useCsssDialog>["state"]>("dialog");
const type = inject<Ref<AttributeValue["type"]>>("type");

const openDialog = () => {
  state!.value.show = true;
  type!.value = props.type;
};
</script>

<template>
  <div @click="openDialog">
    <icon name="plus" style="margin-right: var(--mini);" />
    添加属性值...
  </div>
</template>
