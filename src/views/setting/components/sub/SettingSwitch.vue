<script setup lang="ts">
import { usePlayerStore } from "@/stores/player.store";
import { useSettingStore } from "@/views/setting/store/setting.store";
import { useCsssSwitch } from "csss-ui";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const { COMP, state } = useCsssSwitch();
const { save, reset } = storeToRefs(useSettingStore());
const { authOperations } = usePlayerStore();

const props = defineProps<{
  switch?: SettingSwitch;
}>();

watch(save, (isSaved) => {
  if (!isSaved) return;

  const auth = props.switch?.auth;
  if (state.value.active) {
    if (auth) authOperations.add(auth);
  } else {
    if (auth) authOperations.remove(auth.ticket);
  }
  save.value = false;
});

watch(reset, () => {
  const auth = props.switch?.auth;
  if (auth) {
    authOperations.remove(auth.ticket);
    state.value.active = props.switch.default.value;
  }
});
</script>

<template>
  <c-switch ref="COMP" class="setting-switch" :default="props.switch?.default.value">
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
