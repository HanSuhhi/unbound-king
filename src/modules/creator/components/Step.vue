import { computed } from 'vue';
<script setup lang="ts">
import { NPopconfirm } from "naive-ui";
import Icon from "@/components/Icon.vue";

defineProps<{ plugin: CreatorPlugin }>();
const emits = defineEmits<{
  (e: "deleteItem"): void;
}>();

const deletePlugin = () => emits("deleteItem");
</script>
<template>
  <article class="step">
    <section class="step-left">
      <div class="step-left_icon">
        <icon :name="plugin.icon" />
      </div>
    </section>
    <section class="step-message">
      <p class="step-message_title p-reset">
        {{ plugin.translator[1] }}
        <n-popconfirm :show-icon="false" negative-text="取消" positive-text="确定" @positive-click="deletePlugin">
          <template #trigger>
            <a class="step-message_delete" @click.stop>删除</a>
          </template>
          是否确认删除此插件
        </n-popconfirm>
      </p>
      <p class="step-message_description p-reset">{{ plugin.description }}</p>
    </section>
    <section class="step-right">
      <slot name="operator" />
    </section>
  </article>
</template>

<style scoped>
.step {
  --icon-width: 26%;
  --line-height: var(--large);

  display: flex;
  justify-content: space-around;
  width: 100%;
  min-width: 280px;
  padding: var(--base-margin) 0;
  border-radius: var(--border-radius);
  cursor: pointer;
}

.step-message_delete {
  margin-left: var(--base-margin);
  color: var(--red-bright-1);
  font-size: var(--font-body);
  text-decoration: underline;
}

.step-message_delete:hover {
  color: var(--red-deep-1);
}

.step[data-active] .step-left_icon {
  border-color: var(--main-color);
}

.step[data-active] .step-message_title {
  color: var(--main-color);
}

.step:hover .step-message_description,
.step[data-active] .step-message_description {
  color: var(--white);
}

.step-left_icon {
  --size: calc(1.2 * var(--large));

  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);
  border: var(--border);
  border-radius: 50%;
  cursor: pointer;
  filter: brightness(1.5);
  aspect-ratio: 1 / 1;
}

.step-left {
  position: relative;
  display: flex;
  justify-content: center;
  width: var(--icon-width);
}

.step-left_icon>.icon {
  zoom: 1.8;
}

.step-message_title {
  display: flex;
  align-items: flex-end;
  font-size: var(--font-title-small);
}

.step-message_description {
  margin-top: var(--mini);
  color: var(--gray);
  font-size: var(--font-body-small);
}

.step-message {
  width: calc(100% - var(--icon-width));
}
</style>
