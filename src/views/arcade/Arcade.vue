<script setup lang='ts'>
import { storeToRefs } from "pinia";
import RoleChoose from "./modules/roleChoose/RoleChoose.vue";
import { useStateStore } from "@/stores/state.store";
import { GameState } from "@/enums/state.enum";

const { GAME_STATE } = storeToRefs(useStateStore());
</script>

<template>
  <role-choose v-if="GAME_STATE === GameState.RoleChoose" />
</template>

<style scoped>
</style>
