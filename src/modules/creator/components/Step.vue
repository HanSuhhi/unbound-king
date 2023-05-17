import { computed } from 'vue';
<script setup lang="ts">
import { NPopconfirm } from "naive-ui";
import Icon from "@/components/Icon.vue";

defineProps<{ plugin: CreatorPlugin }>();
const emits = defineEmits<{
  deleteItema: []
}>();

function deletePlugin() {
  return emits("deleteItema");
}
</script>

<template>
  <article cursor-pointer class="step">
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
      <p class="step-message_description p-reset">
        {{ plugin.description }}
      </p>
    </section>
    <section class="step-right">
      <slot name="operator" />
    </section>
  </article>
</template>

<style scoped>
@layer component {
  .step {
    --icon-width: 26%;
    --line-height: var(--large);

    display: flex;
    justify-content: space-around;

    width: 100%;
    min-width: 280px;
    padding: var(--base-margin) 0;

    border-radius: var(--border-radius);
  }

  .step-message_delete {
    margin-left: var(--base-margin);
    font-size: var(--font-body);
    color: var(--red-bright-1);
    text-decoration: underline;
  }

  .step-message_delete:hover {
    color: var(--red-deep-1);
  }

  .step-left_icon {
    --size: calc(1.2 * var(--large));

    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    aspect-ratio: 1 / 1;
    width: var(--size);
    height: var(--size);

    filter: brightness(1.5);
    border: var(--border);
    border-radius: 50%;
  }

  .step-message_title {
    display: flex;
    align-items: flex-end;
    font-size: var(--font-title-small);
  }

  .step-message_description {
    margin-top: var(--mini);
    font-size: var(--font-body-small);
    color: var(--gray);
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

  .step-left {
    position: relative;
    display: flex;
    justify-content: center;
    width: var(--icon-width);
  }

  .step-left_icon > .icon {
    zoom: 1.8;
  }

  .step-message {
    width: calc(100% - var(--icon-width));
  }
}
</style>
