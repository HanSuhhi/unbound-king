<script setup lang="ts">
import TitleCard from "@/components/titleCard/TitleCard";
import Icon from "@/components/Icon.vue";

defineProps<{ data: BaseItem }>();
</script>

<template>
  <title-card class="value-item">
    <template #title>
      <p class="value-item_name p-reset">
        <icon :name="data.icon" class="value-item_icon" />
        {{ data.translator[1] }} ~ {{ data.translator[0] }}
      </p>
    </template>
    <template #subtitle>
      <div cursor-pointer class="value-item_operator">
        <icon name="more" />
      </div>
    </template>
    <p class="value-item_description p-reset">
      {{ data.description }}
    </p>
  </title-card>
</template>

<style scoped>
@layer component {
  .value-item_name {
    display: flex;
    align-items: center;
    font-size: var(--font-title-small);
  }

  .value-item_description {
    filter: brightness(0.7);
  }

  .value-item_icon {
    margin-right: var(--small);
    font-size: var(--font-body);
  }

  .value-item_operator {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--mini);
  }
}
</style>
