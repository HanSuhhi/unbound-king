<script setup lang="ts">
import CommonFormDialog from "@/components/CommonFormDialog.vue";
import { idFormConfig } from "@/composables/form/formConfigs";
import { withFormDetail } from "@/composables/form/formDetail";
import { transformTypeToForm } from "@/composables/form/typeToForm";
import { defineUniqueId } from "@/composables/ci/uniqueId";
import type { ComputedRef } from "vue";
import { computed, inject } from "vue";
import { translatorFormConfig } from "../../../composables/form/formConfigs";
import { getInvertGlobalEnumNameOrNot } from "../../../enums/global.enum";
import typeString from "../game-icon-type.d.ts?raw";

const item = inject<ComputedRef<TabListItem>>("active-item");
const icons = inject<ComputedRef<Array<GameIcon>>>("data");

const formConfig = computed(() =>
  withFormDetail<GameIcon>(transformTypeToForm(typeString), {
    ...idFormConfig,
    ...translatorFormConfig,
    path: {
      title: "路径",
    },
    from: {
      title: "来源",
      defaultValue: item?.value.name,
      disabled: true,
    },
  }),
);
const confirm = (data: GameIcon) => {
  if (!data.translator[1]) data.translator[1] = data.translator[0];
  data.id = defineUniqueId("GI");
  data.from = getInvertGlobalEnumNameOrNot(data.from);
  icons!.value.push(data);
};
</script>

<template>
  <common-form-dialog :form-config="formConfig" :confirm="confirm">
    <template #header> Icon 新增 </template>
  </common-form-dialog>
</template>
