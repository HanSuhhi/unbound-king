<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import KeyEventButton from "../../typeButton/KeyEventButton.vue";
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
const { t } = useI18n();

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
              {{ t(dialogMessage?.title || "") }}
            </template>
            <template #subtitle>
              <icon class="global-dialog_close" cursor-pointer name="close" @click="close!.fn(false)" />
            </template>
            <template #footer>
              <section class="global-dialog_operator" flex_center>
                <key-event-button class="global-dialog_button" plain :key-event="close!" />
                <key-event-button class="global-dialog_button" :key-event="confirm!" />
              </section>
            </template>
            {{ t(dialogMessage?.text || "") }}
          </title-card-draggable>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
@layer component {
  .global-dialog_scrolling {
    opacity: 80%;
  }

  .global-dialog_penetrate {
    pointer-events: none;
    background-color: transparent;
  }

  .global-dialog {
    position: absolute;
    z-index: var(--global-dialog-z-index);
    inset: 0;

    width: 100%;
    height: 100%;

    background-color: rgb(0 0 0 / 40%);
  }

  .global-dialog_main {
    pointer-events: all;
    width: 446px;
    max-width: calc(100vw - 32px);
  }

  .global-dialog_main.slide-down-leave-to {
    transform: translateY(calc(var(--large) * -1));
  }

  .global-dialog_close {
    font-size: var(--font-title);
    transition: var(--transition-prop);
    transition-property: transform, color;
  }

  .global-dialog_close:hover {
    transform: rotate(180deg);
    color: var(--white);
  }

  .global-dialog_operator {
    justify-content: flex-end;
  }

  .global-dialog_button {
    margin: 0 var(--base-margin);
  }
}
</style>
