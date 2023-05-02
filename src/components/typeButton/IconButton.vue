<script setup lang='ts'>
withDefaults(defineProps<{ iconName: BaseIconName; active?: boolean }>(), {
  active: false
});
</script>

<template>
  <!-- I got a vue error when all div in one. -->
  <div
    class="icon-button"
    :class="{ active }"
  >
    <div
      v-paper-ripple
      cursor-pointer
      flex_center
      full
    >
      <icon :name="iconName" class="icon-button_icon" />
    </div>
  </div>
</template>

<style scoped>
.icon-button {
  position: relative;
  box-sizing: border-box;
  width: calc(var(--modules-width) / 1.5);
  height: calc(var(--modules-width) / 1.5);
  overflow: hidden;
  color: var(--gray-bright-2);
  background-color: var(--gray-deep-2);
  border-radius: 50%;
  transition: all var(--moment);
}

.icon-button:hover {
  filter: brightness(1.2);
}

.icon-button_icon {
  font-size: var(--font-title-small);
}

.active {
  color: var(--main-color);
  filter: brightness(1);
}
</style>
