<script setup lang="ts">
import TitleCardDraggable from "@/components/titleCard/TitleCardDraggable";
import { dialogMessage } from "@/composables/components/globalDialog";
import { useDelayShowFromRef } from "@/composables/experience/delayShow";
import { ref } from 'vue';
import TypeButton from "../typeButton/TypeButton.vue";
import { useBoundary } from './composables/boundary';
import { useGlobalDialogKey } from './composables/key';
import { useFixed } from './composables/fixed';

const [delayshow] = useDelayShowFromRef(dialogMessage);

const container = ref();
const box = ref();
const [x, y] = useBoundary(container, box);
const { fixed, changeFixed, scrolling } = useFixed();

useGlobalDialogKey();
</script>

<template>
  <transition>
    <teleport :to="dialogMessage?.toSelecter || 'body'">
      <div ref="container" :class="['global-dialog', scrolling && 'global-dialog_scrolling']" flex_center>
        <transition name="slide-down">
          <title-card-draggable v-if="delayshow" ref="box" :class="['global-dialog_main', `${fixed && 'fixed'}`]" :x="x"
            :y="y" :change-fixed="changeFixed">
            <template #title>
              {{ dialogMessage?.title }}
            </template>
            <template #subtitle>
              <icon class="global-dialog_close" :name="'close'" @click="dialogMessage?._cancel" />
            </template>
            <template #footer>
              <section class="global-dialog_operator" flex_center>
                <type-button class="global-dialog_button" plain @click="dialogMessage?._cancel">取消</type-button>
                <type-button class="global-dialog_button" @click="dialogMessage?._confirm">确定</type-button>
              </section>
            </template>
            {{ dialogMessage?.text }}
          </title-card-draggable>
        </transition>
      </div>
    </teleport>
  </transition>
</template>

<style scoped>
.global-dialog_scrolling {
  opacity: 0.8;
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
}

.global-dialog_close {
  font-size: var(--font-title);
  cursor: pointer;
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
