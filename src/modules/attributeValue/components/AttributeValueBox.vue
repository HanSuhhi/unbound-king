<script setup lang="ts">
import alert from "@/components/alert/alert";
import { useCsssDialog } from "csss-ui";
import type { Ref } from "vue";
import { computed, inject, provide, ref } from "vue";
import addFormDialog from "./AddFormDialog.vue";
import TitleCardList from "@/components/titleCardList/TitleCardList.vue";
import { filter } from "lodash-es";
import ListFooter from "./ListFooter.vue";

const attributeValues = inject<Ref<AttributeValue[]>>("data");

const baseAttributes = computed(() => filter(attributeValues?.value, (attributeValue) => attributeValue.type === "base"));
const advancedAttributes = computed(() => filter(attributeValues?.value, (attributeValue) => attributeValue.type === "advanced"));
const specialAttributes = computed(() => filter(attributeValues?.value, (attributeValue) => attributeValue.type === "special"));

const dialogType = ref<AttributeValue["type"]>("base");

const { COMP, state } = useCsssDialog({ state: { toBox: ".attribute-value" }, style: { classList: { dialog: ["", "router-view-dialog"] } } });

provide("Dialog", COMP);
provide("type", dialogType);
provide("dialog", state);

const openDialog = (type: AttributeValue["type"]) => {
  state!.value.show = true;
  dialogType!.value = type;
};
</script>

<template>
  <add-form-dialog />
  <div class="value-box">
    <alert class="value-box_alert"> 属性值，是作用于人物各项参数判定的直接数值，包括基础属性值，进阶属性值和特殊属性值。 </alert>
    <article class="value-box_main">
      <title-card-list class="value-box_list" :data="baseAttributes">
        <template #title> 基础属性值 </template>
        <template #footer>
          <list-footer type="base" />
        </template>
      </title-card-list>
      <title-card-list class="value-box_list" :data="advancedAttributes">
        <template #title> 进阶属性值 </template>
        <template #footer>
          <list-footer type="advanced" />
        </template>
      </title-card-list>
      <title-card-list class="value-box_list" :data="specialAttributes">
        <template #title> 特殊属性值 </template>
        <template #footer>
          <list-footer type="special" />
        </template>
      </title-card-list>
    </article>
  </div>
</template>

<style scoped>
.value-box {
  width: calc(100%);
  height: calc(var(--main-height) - var(--base-margin));
  margin-right: var(--base-margin);
}

.value-box_list {
  position: relative;
  box-sizing: border-box;
  width: calc(100% / 3);
  height: 100%;
  overflow: hidden auto;
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
</style>
