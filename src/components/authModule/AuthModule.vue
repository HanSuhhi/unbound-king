<script setup lang="ts">
import { useAuthModule } from "./composables/authModule";
import Icon from "@/components/icon/Icon";
import "./auth-module.css";

const { List } = useAuthModule();
</script>

<template>
  <c-menu ref="List">
    <template #item-0="{ name, icon }">
      <div class="module__name">
        <Icon v-if="icon" :icon="icon" />
        <span>
          {{ name }}
        </span>
      </div>
    </template>
  </c-menu>
</template>
