<script setup lang='ts'>
import { computed } from "vue";

const { size = "small" } = defineProps<{
  size?: "small"
}>();

const pixel = computed(() => {
  switch (size) {
    case "small":
    default:
      return "14px";
  }
});
</script>

<template>
  <span class="loader" />
</template>

<style scoped>
@layer component {
  .loader {
    transform: rotateZ(45deg);
    width: v-bind(pixel);
    height: v-bind(pixel);
    color: var(--white);
  }

  .loader::before,
  .loader::after {
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    transform: rotateX(70deg);

    width: inherit;
    height: inherit;

    border-radius: 50%;

    animation: 1s spin linear infinite;
  }

  .loader::after {
    transform: rotateY(70deg);
    color: var(--main-color);
    animation-delay: var(--ani-time);
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotateZ(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotateZ(360deg);
    }
  }
  @keyframes rotateccw {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
  @keyframes spin {
    0%,
    100% {
      box-shadow: .2em 0 0 0 currentcolor;
    }

    12% {
      box-shadow: .2em .2em 0 0 currentcolor;
    }

    25% {
      box-shadow: 0 .2em 0 0 currentcolor;
    }

    37% {
      box-shadow: -.2em .2em 0 0 currentcolor;
    }

    50% {
      box-shadow: -.2em 0 0 0 currentcolor;
    }

    62% {
      box-shadow: -.2em -.2em 0 0 currentcolor;
    }

    75% {
      box-shadow: 0 -.2em 0 0 currentcolor;
    }

    87% {
      box-shadow: .2em -.2em 0 0 currentcolor;
    }
  }
}
</style>
