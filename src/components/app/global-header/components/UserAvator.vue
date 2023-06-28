<script setup lang='ts'>
import LifeHash from "@hansuhhi-don/lifehash-vue";
import { useAvator } from "../composables/avator";

const { email } = useAvator();
</script>

<template>
  <div class="user-avator" cursor-pointer>
    <span>
      <life-hash :input="email" />
    </span>
  </div>
  <!-- <n-upload
    :show-file-list="false"
    :on-before-upload="updateAvator"
  >
    <div class="user-avator" cursor-pointer>
      <span>
        <life-hash :input="email" />
      </span>
    </div>
  </n-upload> -->
</template>

<style scoped>
@layer component {
  .user-avator {
    --size: calc(var(--large) * 1.5);

    position: relative;
    transform: scale(var(--avator-size));

    display: flex;
    align-items: center;
    justify-content: center;

    width: var(--size);
    height: var(--size);
  }

  .user-avator:hover::after {
    content: "+";

    position: absolute;
    inset: 0;

    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 40px;
    color: var(--white);

    background-color: rgb(255 255 255 / 40%);
    border-radius: var(--border-radius);
  }

  .user-avator::before {
    pointer-events: none;
    content: "";

    position: absolute;

    width: 100%;
    height: 100%;
    padding: calc(var(--mini) * 0.5);

    background: linear-gradient(45deg, var(--purple), var(--main-color-deep-2));
    border-radius: var(--border-radius);

    -webkit-mask: linear-gradient(hsl(0deg 0% 100%), hsl(0deg 0% 100%)) content-box, linear-gradient(hsl(0deg 0% 100%), hsl(0deg 0% 100%));
    mask: linear-gradient(hsl(0deg 0% 100%), hsl(0deg 0% 100%)) content-box, linear-gradient(hsl(0deg 0% 100%), hsl(0deg 0% 100%));

    -webkit-mask-composite: clear;
    mask-composite: initial;
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
}
</style>
