<script setup lang="ts">
import { NGradientText } from "naive-ui";
import { onMounted, ref } from "vue";

const props = defineProps<{ destiny: Destiny; isChoosed: boolean }>();

const tab = ref<HTMLElement>();
onMounted(() => {
  tab.value?.style.setProperty("--key-color", props.destiny.color[0]);
  tab.value?.style.setProperty("--sub-color", props.destiny.color[1]);
});
</script>

<template>
  <article ref="tab" class="destiny-tabs">
    <icon :name="destiny.icon" />
    <component
      :is="isChoosed ? NGradientText : 'span'"
      :gradient="{
        from: 'var(--key-color)',
        to: 'var(--sub-color)',
      }"
    >
      {{ destiny.translator[1] }}
    </component>
  </article>
</template>

<style scoped>
.destiny-tabs {
  display: flex;
  padding: var(--small)  calc(var(--large) * 0.7);
  white-space: nowrap;
  border: var(--border);
  border-bottom: 0;
  border-left: 0;
  cursor: pointer;
  place-items: center;
}

.destiny-tabs > .icon {
  margin-right: var(--small);
  background: linear-gradient(145deg, var(--key-color), var(--sub-color));
}
</style>
