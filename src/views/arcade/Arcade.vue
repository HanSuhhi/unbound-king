<script setup lang='ts'>
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { parseImportModule } from "../../composables/ci/importModule";
import { useStateStore } from "@/stores/state.store";
import { GameState } from "@/enums/state.enum";

const modules = (parseImportModule(import.meta.glob("./**/*.vue", { eager: true }), true));

const { GAME_STATE } = storeToRefs(useStateStore());
const { stateToStartGame } = useStateStore();

onMounted(stateToStartGame);
</script>

<template>
  <div class="arcade">
    <template v-for=" component, name of modules" :key="name">
      <component :is="component" v-if="GAME_STATE === GameState[name as keyof typeof GameState]" />
    </template>
  </div>
</template>

<style scoped>
@layer page {
  .arcade {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
