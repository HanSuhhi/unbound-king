<script setup lang="ts">
import type { ComputedRef } from "vue";
import { computed, inject } from "vue";
import { fromFormConfig, translatorFormConfig } from "../../../composables/form/formConfigs";
import typeString from "../game-icon-type.d.ts?raw";
import CommonFormDialog from "@/components/dialog/CommonFormDialog.vue";
import { idFormConfig } from "@/composables/form/formConfigs";
import { withFormDetail } from "@/composables/form/formDetail";
import { transformTypeToForm } from "@/composables/form/typeToForm";
import { defineUniqueId } from "@/composables/ci/uniqueId";

const icons = inject<ComputedRef<Array<GameIcon>>>("data");

const formConfig = computed(() =>
  withFormDetail<GameIcon>(transformTypeToForm(typeString), {
    ...idFormConfig,
    ...translatorFormConfig,
    ...fromFormConfig(),
    path: {
      title: "路径"
    }
  })
);
function confirm(data: GameIcon) {
  if (!data.translator[1]) data.translator[1] = data.translator[0];
  data.id = defineUniqueId("GI");
  icons!.value.push(data);
}
</script>

<template>
  <common-form-dialog :form-config="formConfig" :confirm="confirm">
    <template #header>
      Icon 新增
    </template>
  </common-form-dialog>
</template>
