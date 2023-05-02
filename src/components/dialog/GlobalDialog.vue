<script setup lang="ts">
import { ref } from "vue";
import KeyEventButton from "../KeyEventButton.vue";
import { useBoundary } from "./composables/boundary";
import { useFixed } from "./composables/fixed";
import { key_closeDialog } from "./composables/key/close";
import { key_confrim } from "./composables/key/confirm";
import TitleCardDraggable from "@/components/titleCard/TitleCardDraggable";
import { dialogMessage } from "@/composables/components/globalDialog";
import { useDelayShowFromRef } from "@/composables/experience/delayShow";

const [delayshow] = useDelayShowFromRef(dialogMessage);
const [dialogDelayShow] = useDelayShowFromRef(delayshow);

const container = ref();
const box = ref();
const [x, y] = useBoundary(container, box);
const { fixed, changeFixed, scrolling } = useFixed();

const [close] = key_closeDialog(dialogDelayShow, delayshow);
const [confirm] = key_confrim();
</script>

<template>
  <teleport :to="dialogMessage?.toSelecter || 'body'">
    <transition>
      <div v-if="delayshow" ref="container" class="global-dialog" :class="[scrolling && 'global-dialog_scrolling', !dialogMessage?.needBg && 'global-dialog_penetrate']" flex_center>
        <transition name="slide-down">
          <title-card-draggable v-if="dialogDelayShow" ref="box" class="global-dialog_main" :class="[`${fixed && 'fixed'}`]" :x="x" :y="y" :change-fixed="changeFixed">
            <template #title>
              {{ dialogMessage?.title }}
            </template>
            <template #subtitle>
              <icon class="global-dialog_close" cursor-pointer name="close" @click="close.fn(false)" />
            </template>
            <template #footer>
              <section class="global-dialog_operator" flex_center>
                <key-event-button class="global-dialog_button" plain :key-event="close" />
                <key-event-button class="global-dialog_button" :key-event="confirm" />
              </section>
            </template>
            {{ dialogMessage?.text }}
          </title-card-draggable>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.global-dialog_scrolling {
  opacity: 0.8;
}

.global-dialog_penetrate {
  background-color: transparent !important;
  pointer-events: none;
}

.global-dialog {
  position: absolute;
  z-index: var(--global-dialog-z-index);
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 40%);
  inset: 0;
}

.global-dialog_main {
  width: 446px;
  max-width: calc(100vw - 32px);
  pointer-events: all;
}

.global-dialog_main.slide-down-leave-to {
  transform: translateY(calc(var(--large) * -1));
}

.global-dialog_close {
  font-size: var(--font-title);
  transition: var(--transition-prop);
  transition-property: transform color;
}

.global-dialog_close:hover {
  color: var(--white);
  transform: rotate(180deg);
}

.global-dialog_operator {
  justify-content: flex-end;
}

.global-dialog_button {
  margin: 0 var(--base-margin);
}
</style>
