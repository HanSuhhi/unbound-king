<script setup lang="ts">
import TitleCard from "@/components/titleCard/TitleCard";
import Icon from "@/components/Icon.vue";
defineProps<{ attributeValue: AttributeValue }>();
</script>

<template>
  <TitleCard class="value-item">
    <template #title>
      <p class="value-item_name p-reset">
        <Icon :name="attributeValue.icon" class="value-item_icon" />
        {{ attributeValue.translator.title }} ~ {{ attributeValue.translator.key }}
      </p>
    </template>
    <template #subtitle>
      <div class="value-item_operator">
        <icon name="more" size="small" />
      </div>
    </template>
    <p class="value-item_description p-reset">
      {{ attributeValue.description }}
    </p>
  </TitleCard>
</template>

<style scoped>
.value-item_name {
  display: flex;
  align-items: center;
  margin-bottom: var(--mini);
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
