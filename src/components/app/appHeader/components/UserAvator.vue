<script setup lang='ts'>
import LifeHash from "@hansuhhi-don/lifehash-vue";
import { NUpload } from "naive-ui";
import { useAvator, useUploadAvator } from "../composables/avator";

const { avator, isDefault } = useAvator();
const { updateAvator } = useUploadAvator();
</script>

<template>
  <n-upload
    :show-file-list="false"
    :on-before-upload="updateAvator"
  >
    <div class="user-avator" cursor-pointer>
      <span>
        <life-hash v-if="isDefault" :input="avator" />
        <img v-else :src="avator">
      </span>
    </div>
  </n-upload>
</template>

<style scoped>
.user-avator {
  --size: calc(var(--large) * 1.5);

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);
  transform: scale(var(--avator-size));
}

.user-avator:hover::after {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: var(--white);
  font-size: 40px;
  background-color: rgb(255 255 255 / 40%);
  border-radius: var(--border-radius);
  content: "+";
}

.user-avator::before {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: calc(var(--mini) * 0.5);
  background: linear-gradient(45deg, var(--purple), var(--main-color-deep-2));
  border-radius: var(--border-radius);
  content: "";
  pointer-events: none;
  /* stylelint-disable-next-line */
  -webkit-mask: linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff);
  /* stylelint-disable-next-line */
  -webkit-mask-composite: clear;
}

.user-avator > span {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
}

.user-avator > span > img {
  width: 70%;
  height: 70%;
  border-radius: var(--border-radius);
}
</style>
