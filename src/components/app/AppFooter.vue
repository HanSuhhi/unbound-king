<script setup lang="ts">
import FooterEvent from "./app-footer/FooterEvent.vue";
import FooterSystem from "./app-footer/FooterSystem.vue";
</script>

<template>
  <article class="footer">
    <footer-event />
    <footer-system />
  </article>
</template>

<style scoped>
.footer {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  line-height: 18px;
}
</style>
