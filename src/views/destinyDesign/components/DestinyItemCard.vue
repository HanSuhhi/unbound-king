<script setup lang='ts'>
import Icon from '@/components/icon/Icon';
import { storeToRefs } from 'pinia';
import { useDestinyStore } from '../store/destiny.store';
import { computed } from 'vue';
import typeButton from '@/components/typeButton/TypeButton.vue';

const { tabsIndex } = storeToRefs(useDestinyStore());

const props = defineProps<{
  destiny: Destiny;
  index: number
}>();

const emits = defineEmits<{
  (e: "triggered"): void;
}>();

const method = () => emits("triggered");
const isChoosed = computed(() => props.index === tabsIndex.value);

</script>

<template>
  <article class="destiny-design-card" :data-choosed="isChoosed ? '' : null">
    <aside class="destiny-design-card_aside">
      <div class="destiny-design-card_icon">
        <Icon :icon="destiny.icon" />
      </div>
    </aside>
    <main class="destiny-design-card_main">
      <header class="destiny-design-card_header">
        <span>{{ destiny.title }}</span>
        <type-button color="blue" class="destiny-design-card_button" @click="method">
          <span>选择</span>
        </type-button>
      </header>
      <footer class="destiny-design-card_footer">
        <p class="destiny-design-card_description">
          {{ destiny.description }}
        </p>
      </footer>
    </main>
  </article>
</template>

<style scoped>
.destiny-design-card {
  display: flex;
  width: 14vw;
  min-width: 15rem;
  max-width: 20rem;
  height: 65%;
  margin: var(--base-margin);
  margin-top: 1px;
  padding: var(--small);
  padding-right: var(--normal);
  background-color: var(--bg-color-bright-2);
  border-radius: var(--border-radius);
  outline: var(--border);
  box-shadow: var(--box-shadow-1-luster);
  filter: brightness(1.2);
}

.destiny-design-card:first-child {
  margin-left: 1px;
}

.destiny-design-card[data-choosed] {
  outline: 1px solid var(--main-color-deep-2);
}

.destiny-design-card_aside {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
}

.destiny-design-card_main {
  width: 80%;
}

.destiny-design-card_icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  margin-right: var(--small);
  padding: var(--small);
  overflow: hidden;
  background-color: v-bind("destiny.subColor");
  border-radius: var(--border-radius);
}

.destiny-design-card_icon .icon {
  position: relative;
  top: calc(var(--small) * 0.65);
  left: calc(var(--small) * 0.65);
  color: v-bind("destiny.mainColor");
  transform: scale(1.5);
}

.destiny-design-card_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1.6rem;
}

.destiny-design-card_footer {
  margin-top: var(--mini);
  color: var(--gray-deep-1);
  font-size: var(--font-body-small);
}

.destiny-design-card_button {
  width: calc(var(--large) * 3);
  margin-right: var(--mini);
}

.destiny-design-card_description {
  margin-block-start: 0;
  margin-block-end: 0;
}
</style>