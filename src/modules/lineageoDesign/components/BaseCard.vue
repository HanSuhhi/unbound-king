<script setup lang='ts'>
import { DATA } from "@/composables/data";

defineProps<{ data: Lineageo }>();
</script>

<template>
  <div class="base-card">
    <div class="base-card_text">
      <div class=" base-card_title">
        <div>
          <icon :name="data.icon" :color="data.color" />
          {{ data.translator[1] }} / {{ data.translator[0] }}
        </div>
        <icon :name="DATA.Destinies.get(data.destiny)?.icon" :color="DATA.Destinies.get(data.destiny)?.color" />
      </div>
      <p class="p-reset base-card_description">
        {{ data.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@layer component {
  .base-card {
    margin: var(--base-margin);
    padding: var(--base-margin);
    background-color: var(--bg-color-bright-2);
    border-radius: var(--border-radius);
  }

  .base-card_text {
    width: 100%;
  }

  .base-card_title {
    display: flex;
    justify-content: space-between;
    font-size: var(--font-title-small);
  }

  .base-card_description {
    line-height: 1.2;
    color: var(--gray-bright-1);
  }

  .icon {
    width: 1em;
    height: 1em;
  }
}
</style>
