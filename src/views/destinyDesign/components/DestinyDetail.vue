<script setup lang='ts'>
import { useCsssLayout } from 'csss-ui';
import TitleCard from '@/components/titleCard/TitleCard';
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{
  destiny: Destiny
}>();

const destinyOrigin = computed(() => props.destiny.origin?.split(`

`));

const DestinyFooter = ref();
const scroll = (wheelEvent: WheelEvent) => {
  DestinyFooter.value.scrollLeft += wheelEvent.deltaY;
};


</script>

<template>
  <article class="destiny-detail">
    <header class="destiny-detail_header">
      <title-card class="destiny-detail_main">
        <template #title>种族渊源</template>
        <p v-for="origin of destinyOrigin" :key="origin" class="destiny-detail_origin">
          {{ origin }}
        </p>
      </title-card>
      <aside class="destiny-detail_aside">
        <title-card class="destiny-detail_description">
          <template #title>种族一览</template>
          Lorem ipsum dolor sit amet consectetur, .
        </title-card>
      </aside>
    </header>
    <footer ref="DestinyFooter" class="destiny-detail_footer" @wheel.prevent="scroll">
      <title-card class="destiny-detail_hero destiny-detail_sub">
        <template #title>聚落特色</template>
        <template #subtitle>
          <div class="i-ph-info-bold" style="margin-right: var(--mini);" />
          该种族出身可能获得以下的技能
        </template>
        Lorem ipsum dolor sit amet consectetur, .
      </title-card>
      <title-card class="destiny-detail_land destiny-detail_sub">
        <template #title>心法</template>
        <template #subtitle>
          <div class="i-ph-info-bold" style="margin-right: var(--mini);" />
          该种族工匠可能拥有以下的建筑工艺
        </template>
        Lorem ipsum dolor sit amet consectetur, .
      </title-card>
      <title-card class="destiny-detail_hero destiny-detail_sub">
        <template #title>内功</template>
        <template #subtitle>
          <div class="i-ph-info-bold" style="margin-right: var(--mini);" />
          该种族出身可能获得以下的技能
        </template>
        Lorem ipsum dolor sit amet consectetur, .
      </title-card>
      <title-card class="destiny-detail_land destiny-detail_sub">
        <template #title>技能</template>
        <template #subtitle>
          <div class="i-ph-info-bold" style="margin-right: var(--mini);" />
          该种族工匠可能拥有以下的建筑工艺
        </template>
        Lorem ipsum dolor sit amet consectetur, .
      </title-card>
    </footer>
  </article>
</template>

<style>
.destiny-detail {
  --aside-width: 35%;
  --header-height: 65%;

  width: calc(100%);
  height: 100%;
}

.destiny-detail * {
  box-sizing: border-box;
}

.destiny-detail_header {
  display: flex;
  width: 100%;
  height: var(--header-height);
  max-height: 55vh;
  margin-bottom: var(--clip-size);
}

.destiny-detail_main {
  width: calc(100% - var(--aside-width));
  margin-right: var(--clip-size);
  overflow: auto;
}

.destiny-detail_aside {
  width: var(--aside-width);
}

.destiny-detail_footer {
  display: flex;
  width: calc(100% + var(--clip-size));
  height: calc(100% - var(--header-height) - 2 * var(--clip-size));
  max-height: 28.5vh;
  overflow-x: auto;
  overflow-y: hidden;
}

.destiny-detail_sub {
  min-width: calc(15 * var(--large));
  margin-right: var(--clip-size);
}

.destiny-detail_description {
  height: 100%;
}

.destiny-detail_origin {
  position: relative;
  color: var(--yellow-bright-2);
  line-height: 1.8;
  white-space: pre-line;
  text-indent: 2em;
  margin-block-start: 0.8em !important;
  margin-block-end: 0.8em !important;
}

.destiny-detail_origin:first-child {
  margin-block-start: 0 !important;
}
</style>

