<script setup lang='ts'>
import { useCsssLayout } from 'csss-ui';
import TitleCard from '@/components/titleCard/TitleCard';

defineProps<{
  destiny: Destiny
}>();

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
        <pre class="destiny-detail_origin">
        {{ destiny.origin }}
        </pre>
      </title-card>
      <aside class="destiny-detail_aside">
        <title-card class="destiny-detail_hero destiny-detail_sub">
          <template #title>人物技能</template>
          <template #subtitle>
            <div class="i-mingcute-warning-line" style="margin-right: var(--mini);" />
            该种族出身可能获得其中的任意技能，并非绝对
          </template>
          Lorem ipsum dolor sit amet consectetur, .
        </title-card>
        <title-card class="destiny-detail_land destiny-detail_sub">
          <template #title>聚落特色</template>
          <template #subtitle>
            <div class="i-mingcute-warning-line" style="margin-right: var(--mini);" />
            种族工匠可能拥有以下建筑的工艺
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
  --clip-size: var(--small);

  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.destiny-detail * {
  box-sizing: border-box;
}

.destiny-detail_header {
  display: flex;
  width: 100%;
  height: calc(var(--header-height) - var(--clip-size));
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
  height: 49%;
}

.destiny-detail_footer {
  height: calc(100% - var(--header-height));
}

.destiny-detail_description {
  height: 100%;
}

.destiny-detail_origin {
  position: relative;
  margin: 0;
  color: var(--yellow-bright-2);
  font-size: calc(var(--normal) * 1.04);
  line-height: 1.5;
  white-space: pre-line;
}
</style>

