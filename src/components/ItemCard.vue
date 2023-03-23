<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import NumberMark from "@/components/NumberMark.vue";
import SubButton from "./SubButton.vue";

type Props = { icon: BaseIconName };
defineProps<Props>();

type Emit = { (e: "triggered"): void };
const emits = defineEmits<Emit>();

const method = () => emits("triggered");
</script>

<template>
  <article class="item-card">
    <header class="item-card_header">
      <p class="item-card_title">
        <icon :name="icon" />
        <slot name="title" />
        <NumberMark>
          <slot name="number" />
        </NumberMark>
      </p>
      <sub-button @click="method">选择</sub-button>
    </header>
    <footer class="item-card_footer">
      <slot name="description" />
    </footer>
  </article>
</template>

<style scoped>
.item-card {
  display: inline-flex;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 270px;
  max-width: 290px;
  min-height: 60px;
  margin: var(--base-margin);
  margin-top: 0;
  padding: var(--small);
  background-color: var(--bg-color-bright-2);
  border: var(--border);
  border-radius: var(--border-radius);
}

.item-card[data-choosed] {
  border: 1px solid var(--main-color-deep-2);
}

.item-card_title {
  display: flex;
  align-items: center;
}

.item-card_title > .icon {
  zoom: 1.2;
}

.item-card_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 1.6rem;
  white-space: nowrap;
}

.item-card_footer {
  width: 100%;
  margin-top: var(--mini);
  color: var(--gray-deep-1);
  font-size: var(--font-body-small);
}
</style>
