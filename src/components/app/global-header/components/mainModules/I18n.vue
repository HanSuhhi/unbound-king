<script setup lang='ts'>
import { NPopselect } from "naive-ui";
import type { VNodeChild } from "vue";
import { h } from "vue";
import { floor } from "lodash";
import type { I18nOption } from "../../composables/locale";
import { useLocale } from "../../composables/locale";
import { closeModules } from "../../composables/modulesController";
import { usePopoverControl } from "../../composables/popoverControl";
import type { ModuleProp } from "./module-type";
import KbdIcon from "@/components/kbdIcon/KbdIcon.vue";
import { parseImportModule } from "@/composables/ci/importModule";
import { countKeys } from "@/composables/util/object";

const { enterKeyEvent, index } = defineProps<ModuleProp>();

const { popoverControl, toggle } = usePopoverControl(enterKeyEvent);

const { value, options } = useLocale(toggle, popoverControl);
const langs = parseImportModule(import.meta.glob("#/composables/i18n/langs/*.ts", { eager: true }), true);

closeModules(popoverControl, index);
function renderLabel({ hotkey, label, value }: I18nOption): VNodeChild {
  return [
    h(
      "p",
      {
        class: "p-reset",
        style: {
          "display": "flex",
          "align-items": "flex-end",
          "width": "100%"
        }
      },
      {
        default: () => [
          label,
          h(
            "span",
            {
              class: ["i18n-option_percent", "ml-mini", "flex-1"]
            },
            `${floor(countKeys(langs[value as string]) / countKeys(langs["en-us"]), 4) * 100}%`
          ),
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

<style>
@layer component {
  .n-base-select-option__content:has(.i18n-option_percent) {
    flex: 1;
  }

  .i18n-option_percent {
    font-size: var(--font-body-small);
    color: var(--gray-bright-2);
  }
}
</style>
