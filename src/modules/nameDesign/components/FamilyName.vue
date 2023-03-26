<script setup lang="ts">
import NumberMark from "@/components/NumberMark.vue";
import SearchInput from '@/components/SearchInput.vue';
import TitleCard from "@/components/titleCard/TitleCard";
import typeButton from "@/components/typeButton/TypeButton.vue";
import { ElInput } from "element-plus";
import type { Ref } from "vue";
import { inject, ref, watch } from 'vue';
import { copy } from '../../../composables/experience/copy';
import { useFamilyNames } from "../composables/familyName";
import NameTag from "./NameTag.vue";

const familyNames = inject<Ref<FamilyName[]>>("family-names");
const showFamilyNames = ref<FamilyName[]>(familyNames?.value!);
watch(familyNames!, () => {
  showFamilyNames.value = familyNames?.value!;
}, { deep: true });

const newName = ref("");
const [addFamilyName, removeFamilyName] = useFamilyNames(newName);

const watchSearchEvent = (input: string) => {
  showFamilyNames.value = familyNames?.value.filter(familyName => familyName.includes(input)) || [];
};
</script>

<template>
  <title-card class="family-name">
    <template #title>
      姓氏
      <number-mark>{{ showFamilyNames?.length }}</number-mark>
    </template>
    <template #subtitle>
      <search-input :watch-event="watchSearchEvent" />
    </template>
    <section class="family-name_names">
      <name-tag v-for="(name, index) of showFamilyNames" :key="name" @close="removeFamilyName(index)" @copy="copy(name)">
        {{ name }}
      </name-tag>
    </section>
    <template #footer>
      <section class="family-name_input">
        <el-input v-model="newName" placeholder="请输入新增的姓氏..." show-word-limit maxlength="3"
          @keyup.enter="addFamilyName" />
        <type-button class="family-name_button" @click="addFamilyName">新增</type-button>
      </section>
    </template>
  </title-card>
</template>

<style scoped>
.family-name {
  max-width: 500px;
}

.family-name_input {
  display: flex;
}

.family-name_button {
  margin-left: var(--base-margin);
}
</style>
