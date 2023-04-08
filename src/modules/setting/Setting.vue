<script setup lang="ts">
import { defineRouterChange } from "@/composables/experience/loadingbar";
import { useLoadingBar } from "naive-ui";
import { useDelayShowFromInjectData } from "../../composables/experience/delayShow";
import SettingFooter from "./components/SettingFooter.vue";
import SettingHeader from "./components/SettingHeader.vue";
import "./setting.css";

const [globalShow, partShow] = useDelayShowFromInjectData("setting");

defineRouterChange();
</script>

<template>
  <teleport to="body">
    <transition>
      <template v-if="globalShow">
        <base-layout class="setting">
          <template #header>
            <transition name="slide-down">
              <SettingHeader v-if="partShow" />
            </transition>
          </template>
          <template #footer>
            <transition name="slide-up"> <SettingFooter v-if="partShow" /></transition>
          </template>
        </base-layout>
      </template>
    </transition>
  </teleport>
</template>

<style scoped>
.slide-down-leave-to {
  transform: translateY(0);
}

.slide-up-leave-to {
  transform: translateY(0);
}
</style>
