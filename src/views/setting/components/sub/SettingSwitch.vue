<script setup lang="ts">
import { useCsssSwitch } from "csss-ui";
const props = defineProps<{
  prop?: UseCsssSwitchProps;
}>();

const { COMP } = useCsssSwitch(props.prop);
</script>

<template>
  <c-switch ref="COMP" class="setting-switch">
    <span class="setting-switch_text">关闭</span>
    <span class="setting-switch_text">开启</span>
  </c-switch>
</template>

<style scoped>
.setting-switch {
  --border-radius: 2px;

  position: relative;
  display: flex;
  align-items: center;
  width: 40%;
  margin: var(--mini) var(--normal);
  border-radius: var(--border-radius);
}

.setting-switch_text {
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  cursor: pointer;
}

.setting-switch::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: var(--main-color-deep-2);
  border-radius: var(--border-radius);
  transition: left var(--moment);
  content: "";
}

.setting-switch[data-active]::before {
  left: 50%;
}
</style>
