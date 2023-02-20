<script setup lang='ts'>
import Icon from '@/components/icon/Icon';
defineProps<{
  destiny: Destiny
}>();
</script>

<template>
  <section class="destiny-item-card">
    <Icon :icon="destiny.icon" />
    <p>{{ destiny.title }}</p>
    <span>{{ destiny.key }}</span>
  </section>
</template>

<style scoped>
.destiny-item-card {
  display: grid;
  grid-template:
    "left right-top"
    "left right-bottom" / 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 15vw;
  min-width: 11rem;
  margin: var(--small);
  background-color: var(--bg-color-bright-2);
  border-radius: var(--small);
}

.destiny-item-card .icon {
  grid-area: left;
  color: red;
}

.destiny-item-card p {
  grid-area: right-top;
  justify-content: end;
  background-color: #CCC;
}

.destiny-item-card span {
  grid-area: right-bottom;
  background-color: #EEE;
}
</style>