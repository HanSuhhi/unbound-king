<script setup lang='ts'>
import { NPopselect } from "naive-ui";
import { useLocale } from "../../composables/locale";

defineProps<{ enterKeyEvent: KeyEventWithoutFn }>();

const { value, options } = useLocale();
</script>

<template>
  <section class="i18n">
    <n-popselect
      v-model:value="value"
      :options="options"
      trigger="click"
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
