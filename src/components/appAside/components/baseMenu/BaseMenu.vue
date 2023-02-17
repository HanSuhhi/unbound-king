<script setup lang="ts">
import Icon from "@/components/icon/Icon";
import "./base-menu.css";
import { defineMenuLayout } from "../../composables/menuLayout";

const { asideMenu } = defineMenuLayout();

</script>

<template>
  <c-menu :ref="asideMenu.COMP">
    <template #item-0="{ title, icon }">
      <div class="module__name">
        <Icon v-if="icon" :icon="icon" />
        <span>
          {{ title }}
        </span>
      </div>
    </template>
  </c-menu>
</template>
