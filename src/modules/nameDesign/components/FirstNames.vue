<script setup lang="ts">
import { defineDataKey, useFilterFirstNames } from "../composables/filterFirstName";
import FirstName from "./FirstName.vue";
import { DATA } from "@/composables/data";

const { filterNames, genders, chases } = useFilterFirstNames();
</script>

<template>
  <template v-for="chase of chases" :key="chase">
    <template v-for="gender of genders" :key="gender">
      <first-name v-if="filterNames[defineDataKey({ chase, gender })].length" :chase="chase" :gender="gender" :first-names="filterNames[defineDataKey({ chase, gender })]">
        / {{ DATA.Chases[chase].translator[1] }} / {{ DATA.Genders[gender][1] }}
      </first-name>
    </template>
  </template>
  <template v-for="chase of chases" :key="chase">
    <first-name :chase="chase" :first-names="filterNames[defineDataKey({ chase })]">
      / {{ DATA.Chases[chase].translator[1] }}
    </first-name>
  </template>
  <template v-for="gender of genders" :key="gender">
    <first-name :gender="gender" :first-names="filterNames[defineDataKey({ gender })]">
      / {{ DATA.Genders[gender][1] }}
    </first-name>
  </template>

  <first-name :first-names="filterNames[defineDataKey({})]" />
</template>
