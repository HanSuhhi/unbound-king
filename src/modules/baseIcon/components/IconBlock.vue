<script setup lang="ts">
import { throttle } from "lodash-es";
import { useMessage } from "naive-ui";
import Icon from "@/components/Icon.vue";
import { animationDuration } from "@/composables/constant/env";

const props = defineProps<{ icon: BaseIcon; notCopy?: boolean }>();

const message = useMessage();

const copy = throttle((name: string) => {
  if (props.notCopy) return;
  navigator.clipboard.writeText(name);
  message.info("图标 key 复制成功");
}, animationDuration);
</script>

<template>
  <section class="common-block icon-block" @click="copy(icon.translator[0] || icon.translator[0])">
    <icon class="icon-block_icon" :icon="icon" />
    <span class="icon-block_title">{{ icon.translator[1] }}</span>
  </section>
</template>

<style scoped>
.icon-block_icon {
  min-width: 2em;
  min-height: 2em;
}

.icon-block_title {
  margin-top: var(--small);
}
</style>
