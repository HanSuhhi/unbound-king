<script setup lang="ts">
import TitleCard from "@/components/titleCard/TitleCard";
import Icon from "@/components/Icon.vue";
defineProps<{ data: BaseItem }>();
</script>

<template>
  <TitleCard class="value-item">
    <template #title>
      <p class="value-item_name p-reset">
        <Icon :name="data.icon" class="value-item_icon" />
        {{ data.translator[1] }} ~ {{ data.translator[0] }}
      </p>
    </template>
    <template #subtitle>
      <div class="value-item_operator">
        <icon name="more" />
      </div>
    </template>
    <p class="value-item_description p-reset">
      {{ data.description }}
    </p>
  </TitleCard>
</template>

<style scoped>
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
  cursor: pointer;
}

.value-item_date {
  width: fit-content;
  margin-top: var(--base-margin);
}
</style>
