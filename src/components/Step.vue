import { computed } from 'vue';
<script setup lang="ts">
defineProps<{ plugin: CreatorPlugin }>();
</script>

<template>
  <article class="step">
    <section class="step-left">
      <div class="step-left_icon">
        <icon :name="plugin.icon" />
      </div>
    </section>
    <section class="step-message">
      <p class="step-message_title p-reset">{{ plugin.translator.title }}</p>
      <p class="step-message_description p-reset">{{ plugin.description }}</p>
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

.step:hover .step-left_icon,
.step[data-active] .step-left_icon {
  border-color: var(--main-color);
}

.step:hover .step-message_title,
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

.step-left_icon > .icon {
  zoom: 1.8;
}

.step:not(:first-child) {
  margin-top: calc(var(--line-height));
}

.step:not(:last-child) > .step-left::after {
  --width: 2px;

  position: absolute;
  bottom: calc(-1 * var(--base-margin) - var(--line-height));
  left: 50%;
  width: 2px;
  height: var(--line-height);
  background-color: var(--gray-bright-2);
  content: "";
}

.step-message_title {
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
