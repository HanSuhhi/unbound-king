<script setup lang='ts'>
</script>

<template>
  <article class="extend">
    <div class="extend-line" />
    <div class="extend-line" />
    <div class="extend-line" />
    <div class="extend-line" />
  </article>
</template>

<style scoped>
@layer component {
  .extend {
    --width: calc(var(--normal) * 1.2);

    zoom: 0.8;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .extend-line {
    width: var(--width);
    height: 2px;
    margin: 1.5px;

    background-color: var(--white);
    border-radius: 1px;
  }

  .extend-line:nth-child(2),
  .extend-line:nth-child(4) {
    --line-width: calc(var(--width) / 1.5);
    --left: 0;

    position: relative;
    left: var(--left);
    width: var(--line-width);
    transition: all var(--ani-time);
  }

  .extend[data-reverse] .extend-line {
    --left: calc(var(--width) - var(--line-width));
  }
}
</style>
