<script setup lang='ts'>
import { NCheckbox, NCheckboxGroup } from "naive-ui";
import { useDestinyFilter } from "../composables/destinyFilter";
import { DATA_Destiny } from "../../destinyDesign/data/";
import TitleCard from "@/components/titleCard/TitleCard";
import SearchInput from "@/components/SearchInput.vue";
import DestinyText from "@/components/DestinyText.vue";
import BaseCard from "@/modules/lineageoDesign/components/BaseCard.vue";
import { useHtmlPropLint } from "@/composables/util/htmlPropLint";
import AddButton from "@/components/performance/AddButton.vue";

const { destinyChoosed, showLineageos, activeIndex } = useDestinyFilter();
</script>

<template>
  <title-card class="lineageo-detail">
    <template #title>
      血统一览
    </template>
    <template #subtitle>
      <search-input :watch-event="() => {}" />
    </template>
    <template #footer>
      <add-button />
    </template>
    <aside class="lineageo-list_filter">
      <p class="p-reset lineageo-list_title">
        种族筛选
      </p>
      <n-checkbox-group v-model:value="destinyChoosed" class="lineageo-list_group">
        <template v-for="[_, destiny] in DATA_Destiny" :key="_">
          <n-checkbox :value="destiny.translator[0]" class="lineageo-checkbox">
            <destiny-text :destiny="destiny" />
          </n-checkbox>
        </template>
      </n-checkbox-group>
    </aside>
    <main class="lineageo-list_main">
      <template v-for="lineageo, index of showLineageos" :key="lineageo.id">
        <base-card :data="lineageo" :data-choosed="useHtmlPropLint(index === activeIndex)" class="lineageo-list_card" @click="activeIndex = index" />
      </template>
    </main>
  </title-card>
</template>

<style scoped>
.lineageo-detail {
  max-width: 340px;
  height: 100%;
  margin-right: var(--base-margin);
}

:deep(.title-card_main) {
  left: 0;
  display: flex;
  width: 100%;
  padding: 0;
}

.lineageo-checkbox {
  margin-bottom: var(--base-margin);
}

.lineageo-list_filter {
  width: 30%;
  height: 100%;
  margin-left: var(--base-margin);
  border-right: var(--border);
}

.lineageo-list_title {
  margin: var(--base-margin);
  margin-left: 0;
  color: var(--main-color);
  font-size: var(--font-title);
}

.lineageo-list_main {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  width: 100%;
}

.lineageo-list_card {
  /* stylelint-disable-next-line value-no-vendor-prefix */
  width: -webkit-fill-available;
  border: var(--border);
  cursor: pointer;
}

.lineageo-list_card[data-choosed] {
  border-color: var(--main-color);
}
</style>
