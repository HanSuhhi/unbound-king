<script setup lang="ts">
import { ref, watch } from "vue";
import { NInput } from "naive-ui";
import { useFirstName } from "../composables/firstName";
import NameTag from "./NameTag.vue";
import NumberMark from "@/components/NumberMark.vue";
import SearchInput from "@/components/inputs/SearchInput.vue";
import TitleCard from "@/components/titleCard/TitleCard";
import typeButton from "@/components/typeButton/TypeButton.vue";
import { copy } from "@/composables/experience/copy";

const props = defineProps<{ firstNames: FirstName[]; gender?: Gender; chase?: Chase }>();
const showFirstNames = ref<FirstName[]>(props.firstNames);
watch(
  () => props.firstNames,
  () => (showFirstNames.value = props.firstNames)
);

function watchSearchEvent(input: string) {
  showFirstNames.value = props.firstNames.filter(firstName => firstName.name.includes(input)) || [];
}

const newName = ref("");
const { addFirstName, removeFirstName } = useFirstName(newName, props.gender, props.chase);
</script>

<template>
  <title-card class="first-name">
    <template #title>
      名辞
      <slot />
      <number-mark class="ml-mini">
        {{ showFirstNames?.length }}
      </number-mark>
    </template>
    <template #subtitle>
      <search-input :watch-event="watchSearchEvent" />
    </template>
    <section class="first-name_names">
      <name-tag
        v-for="firstName of showFirstNames" :key="firstName.name" @close="removeFirstName(firstName.name)"
        @copy="copy(firstName.name)"
      >
        {{ firstName.name }}
      </name-tag>
    </section>
    <template #footer>
      <section class="first-name_input">
        <n-input
          v-model:value="newName" placeholder="请输入新增的名辞..." show-count clearable maxlength="3"
          @keyup.enter="addFirstName"
        />
        <type-button class="first-name_button ml_bm" @click="addFirstName">
          新增
        </type-button>
      </section>
    </template>
  </title-card>
</template>

<style scoped>
@layer component {
  .first-name_input {
    display: flex;
    align-items: center;
  }
}
</style>
