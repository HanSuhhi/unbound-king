<script setup lang="ts">
import type { Ref } from "vue";
import { computed, inject, provide, ref } from "vue";
import { filter } from "lodash";
import addFormDialog from "./AddFormDialog.vue";
import ListFooter from "./ListFooter.vue";
import TitleCardList from "@/components/titleCardList/TitleCardList.vue";
import Alert from "@/components/Alert.vue";
import { defineCommonDialog } from "@/composables/components/commonDialog";

const attributeValues = inject<Ref<AttributeValue[]>>("data");

const baseAttributes = computed(() => filter(attributeValues?.value, attributeValue => attributeValue.type === "base"));
const advancedAttributes = computed(() => filter(attributeValues?.value, attributeValue => attributeValue.type === "advanced"));
const specialAttributes = computed(() => filter(attributeValues?.value, attributeValue => attributeValue.type === "special"));

const dialogType = ref<AttributeValue["type"]>("base");
provide("type", dialogType);
defineCommonDialog();
</script>

<template>
  <add-form-dialog />
  <div class="value-box">
    <alert class="value-box_alert">
      属性值，是作用于角色各项参数判定的直接数值，包括基础属性值，进阶属性值和特殊属性值。
    </alert>
    <article class="value-box_main">
      <title-card-list class="value-box_list" :data="baseAttributes">
        <template #title>
          基础属性值
        </template>
        <template #footer>
          <list-footer type="base" />
        </template>
      </title-card-list>
      <title-card-list class="value-box_list" :data="advancedAttributes">
        <template #title>
          进阶属性值
        </template>
        <template #footer>
          <list-footer type="advanced" />
        </template>
      </title-card-list>
      <title-card-list class="value-box_list" :data="specialAttributes">
        <template #title>
          特殊属性值
        </template>
        <template #footer>
          <list-footer type="special" />
        </template>
      </title-card-list>
    </article>
  </div>
</template>

<style scoped>
@layer component {
  .value-box {
    width: calc(100%);
    height: calc(var(--main-height) - var(--base-margin));
    margin-right: var(--base-margin);
  }

  .value-box_list {
    position: relative;

    overflow: hidden auto;

    box-sizing: border-box;
    width: calc(100% / 3);
    height: 100%;
  }

  .value-box_alert {
    box-sizing: border-box;
    margin-right: var(--base-margin);
  }

  .value-box_main {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: calc(100% - var(--large));
  }
}
</style>
