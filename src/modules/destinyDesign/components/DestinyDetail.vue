<script setup lang="ts">
import { NInput } from "naive-ui";
import { useTextareaTheme } from "../composables/textareaTheme";
import { useDestiny } from "../composables/activeItem";
import DestinySetting from "./DestinySetting.vue";
import TitleCard from "@/components/titleCard/TitleCard";
import AutoForm from "@/components/autoForm/autoForm.vue";

const props = defineProps<{ index: number }>();

const { destiny, form: destinyFormconfig } = useDestiny(props);
function getNewModel(_destiny: Destiny) {
  destiny.value = _destiny;
}

const textareaTheme = useTextareaTheme();
</script>

<template>
  <article class="destiny-detail">
    <section class="destiny-detail_part">
      <title-card class="destiny-detail_description">
        <template #title>
          种族基础信息
        </template>
        <auto-form :config="destinyFormconfig" hot-update @update-data="getNewModel" />
      </title-card>
      <title-card class="destiny-detail_main">
        <template #title>
          种族渊源
        </template>
        <n-input v-model:value="destiny!.origin" :theme-overrides="textareaTheme" class="destiny-detail_origin" type="textarea" />
      </title-card>
    </section>
    <destiny-setting class="destiny-setting" />
  </article>
</template>

<style scoped>
@layer component {
  .destiny-detail {
    --aside-width: 35%;
    --header-height: 65%;

    position: relative;
    top: var(--base-margin);

    display: flex;
    flex-direction: column;

    width: 100%;
    height: calc(100% - var(--base-margin));
  }

  .destiny-detail_part {
    overflow: auto;
    display: flex;
    flex: 1;
    justify-content: space-between;

    margin-bottom: var(--base-margin);
  }

  .destiny-detail_part > .title-card {
    box-sizing: border-box;
    height: calc(100% - 2px);

    &:first-child {
      width: 100%;
      margin-right: calc(var(--base-margin) / 2);
    }

    &:last-child {
      width: 35%;
      margin-left: calc(var(--base-margin) / 2);
    }
  }

  .destiny-detail_origin {
    height: 100%;
  }

  .destiny-detail_origin textarea {
    white-space: pre-line;
  }}
</style>
