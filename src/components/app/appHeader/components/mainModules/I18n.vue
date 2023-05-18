<script setup lang='ts'>
import { NPopselect } from "naive-ui";
import type { VNodeChild } from "vue";
import { h } from "vue";
import type { I18nOption } from "../../composables/locale";
import { useLocale } from "../../composables/locale";
import { closeModules } from "../../composables/modulesController";
import { usePopoverControl } from "../../composables/popoverControl";
import type { ModuleProp } from "./module-type";
import KbdIcon from "@/components/kbdIcon/KbdIcon.vue";

const { enterKeyEvent, index } = defineProps<ModuleProp>();

const { popoverControl, toggle } = usePopoverControl(enterKeyEvent);

const { value, options } = useLocale(toggle, popoverControl);

closeModules(popoverControl, index);
function renderLabel({ hotkey, label }: I18nOption): VNodeChild {
  return [
    h(
      "p",
      {
        class: "p-reset",
        style: {
          "display": "flex",
          "align-items": "center"
        }
      },
      {
        default: () => [
          label,
          h(KbdIcon, {
            text: hotkey,
            class: "ml-bm"
          })
        ]
      }
    )
  ];
}
</script>

<template>
  <section class="i18n" @click="toggle">
    <n-popselect
      v-model:value="value"
      :options="options"
      :render-label="renderLabel"
      :show="popoverControl"
      :on-clickoutside="toggle"
      :show-checkmark="false"
    >
      <section
        class="module-icon"
        cursor-pointer
      >
        <icon name="i18n" />
      </section>
    </n-popselect>
  </section>
</template>
