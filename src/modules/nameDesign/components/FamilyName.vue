<script setup lang="ts">
import type { Ref } from "vue";
import { inject, ref, watch } from "vue";
import { NInput } from "naive-ui";
import { copy } from "../../../composables/experience/copy";
import { useFamilyNames } from "../composables/familyName";
import NameTag from "./NameTag.vue";
import typeButton from "@/components/typeButton/TypeButton.vue";
import TitleCard from "@/components/titleCard/TitleCard";
import SearchInput from "@/components/inputs/SearchInput.vue";
import NumberMark from "@/components/NumberMark.vue";

const familyNames = inject<Ref<FamilyName[]>>("family-names")!;
const showFamilyNames = ref<FamilyName[]>(familyNames?.value);
watch(familyNames!, () => (showFamilyNames.value = familyNames?.value), { deep: true });

const newName = ref("");
const { addFamilyName, removeFamilyName } = useFamilyNames(newName);

function watchSearchEvent(input: string) {
  showFamilyNames.value = familyNames?.value.filter(familyName => familyName.includes(input)) || [];
}

const loadingShow = ref(true);
const initFamilyNames = watch(showFamilyNames, (names) => {
  if (!names) return;
  loadingShow.value = false;
  initFamilyNames();
});
</script>

<template>
  <title-card class="family-name">
    <template #title>
      姓氏
      <number-mark class="ml-mini">
        {{ showFamilyNames?.length }}
      </number-mark>
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
        <n-input
          v-model:value="newName" placeholder="请输入新增的姓氏..." show-count clearable maxlength="3"
          @keyup.enter="addFamilyName"
        />
        <type-button class="family-name_button" @click="addFamilyName">
          新增
        </type-button>
      </section>
    </template>
  </title-card>
</template>

<style scoped>
@layer component {
  .family-name {
    max-width: 500px;
    min-height: 100%;
  }

  .family-name_input {
    display: flex;
    align-items: center;
  }

  .family-name_names {
    min-height: 60vh;
  }

  .family-name_button {
    margin-left: var(--base-margin);
  }
}
</style>
