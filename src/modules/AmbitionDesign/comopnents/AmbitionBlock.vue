<script setup lang='ts'>
import { NCollapse, NCollapseItem } from "naive-ui";
import TitleCard from "@/components/titleCard/TitleCard";
import { DATA } from "@/composables/data";

defineProps<{
  ambition: Ambition
}>();
</script>

<template>
  <title-card class="ambition-block">
    <template #title>
      <div class="ambition-block_title">
        <icon v-if="ambition.chase" :path="DATA.Chases[ambition.chase].icon" />
        {{ ambition.translator[1] }}
      </div>
    </template>
    <template #subtitle>
      <icon name="more" />
    </template>
    <p class="p-reset">
      {{ ambition.description }}
    </p>
    <template #footer>
      <n-collapse>
        <n-collapse-item title="抱负详情" name="1">
          <div>wait to do</div>
        </n-collapse-item>
      </n-collapse>
    </template>
  </title-card>
</template>

<style scoped>
@layer component {
  .ambition-block {
    margin: var(--base-margin);
    margin-top: 0;
    margin-left: 0;
  }

  .ambition-block_title {
    display: flex;
    align-items: center;
  }

  .ambition-block_title > .icon {
    margin-right: var(--small);
  }
}
</style>
