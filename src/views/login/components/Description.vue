<script setup lang='ts'>
import { useContacts } from "../composables/contacts";
import DescriptionPart from "./DescriptionPart.vue";

const { contacts } = useContacts();
</script>

<template>
  <article class="description">
    <h2 class="description_title h-reset">
      Contact...
    </h2>
    <template v-for="{ title, content } of contacts" :key="title">
      <description-part :title="title" :content="content" />
    </template>
    <a href="" class="description-extra a-reset">Blog⥱</a>
  </article>
</template>

<style  scoped>
@layer component {
  .description {
    position: absolute;
    z-index: 1;
    bottom: 5vh;
    left: 5vw;

    color: var(--white);
  }

  .description_title {
    font-size: calc( var(--font-title-main) * 1.8);
    font-weight: lighter;
  }

  .description-extra {
    font-size: calc( var(--font-title-main) * 1.8);

  }
}
</style>
