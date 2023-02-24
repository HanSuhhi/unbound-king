<script setup lang='ts'>
import { nextTick, ref } from "vue";
import AppAside from "./components/appAside/appAside";
import AppAsideHeader from "./components/appAside/components/appAsideHeader/AppAsideHeader";
import AppHeader from "./components/appHeader/AppHeader";
import GlobalDialog from "./components/dialog/GlobalDialog";
import IconPreset from "./components/IconPreset";
import Setting from "./views/setting/Setting";
import { useGlobalStore } from '@/stores/global.store';
import { storeToRefs } from 'pinia';
import { defineAppLayout } from "./composables/appLayout";

const { Layout } = defineAppLayout();
const { pageTransition } = storeToRefs(useGlobalStore());

const iconPreset = ref(true);
nextTick(() => iconPreset.value = false);
</script>

<template>
  <IconPreset v-if="iconPreset" />
  <c-layout ref="Layout" class="app app-delay">
    <router-view v-slot="{ Component }">
      <transition :name="pageTransition" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <template #header>
      <app-header />
    </template>
    <template #aside>
      <AppAsideHeader />
      <AppAside />
    </template>
  </c-layout>
  <Setting />
  <GlobalDialog />
</template>
