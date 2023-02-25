<script setup lang='ts'>
import { useCsssLayout } from 'csss-ui';
import TitleCard from '@/components/titleCard/TitleCard';
import { computed, onMounted } from 'vue';

const props = defineProps<{
  destiny: Destiny
}>();

const destinyOrigin = computed(() => props.destiny.origin?.split(`

`));



const { COMP } = useCsssLayout({
  state: {
    layoutType: "footer-aside",
    reverse: true
  },
  style: {
    classList: {
      layout: ["", ""],
      main: ["", "destiny-detail_main"],
      aside: ["", "destiny-detail_aside"],
      footer: ["", "destiny-detail_footer"],
    },
    property: {
      "--footer-height": "45%",
      "--aside-width": "40%"
    },
  }
});
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
        <title-card class="destiny-detail_hero destiny-detail_sub">
          <template #title>人物技能</template>
          <template #subtitle>
            <div class="i-ph-info-bold" style="margin-right: var(--mini);" />
            该种族出身可能获得以下的技能
          </template>
          Lorem ipsum dolor sit amet consectetur, .
        </title-card>
        <title-card class="destiny-detail_land destiny-detail_sub">
          <template #title>聚落特色</template>
          <template #subtitle>
            <div class="i-ph-info-bold" style="margin-right: var(--mini);" />
            该种族工匠可能拥有以下的建筑工艺
          </template>
          Lorem ipsum dolor sit amet consectetur, .
        </title-card>
      </aside>
    </header>
    <footer class="destiny-detail_footer">
      <title-card class="destiny-detail_description">
        <template #title>种族一览</template>
        Lorem ipsum dolor sit amet consectetur, .
      </title-card>
    </footer>
  </article>
</template>

<style>
.destiny-detail {
  --aside-width: 35%;
  --header-height: 55%;
  --clip-size: calc(var(--normal));

  width: calc(100% - var(--clip-size));
  height: 100%;
  border-radius: 20px;
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
  width: calc(100% - var(--aside-width) - var(--clip-size));
  margin-right: var(--clip-size);
  overflow: auto;
}

.destiny-detail_aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: var(--aside-width);
}

.destiny-detail_sub {
  height: calc((100% - var(--clip-size)) / 2);
}

.destiny-detail_footer {
  height: 100%;
  max-height: 28.5vh;
}

.destiny-detail_description {
  height: 100%;
}

.destiny-detail_origin {
  position: relative;
  color: var(--yellow-bright-2);
  font-size: calc(var(--normal) * 1.04);
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

