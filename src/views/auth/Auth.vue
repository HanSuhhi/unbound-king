<script setup lang='ts'>
import AuthTitle from "./components/AuthTitle.vue";
import AuthThrirdParty from "./components/AuthThrirdParty.vue";
import BgModel from "./components/BgModel.vue";
import AuthFooter from "./components/AuthFooter.vue";
import AuthForm from "./components/AuthForm.vue";
import AuthDecorator from "./components/AuthDecorator.vue";
import AuthOptions from "./components/AuthOptions.vue";
</script>

<template>
  <div class="auth">
    <auth-title />
    <div class="auth-header line_y_before_all">
      <auth-thrird-party />
    </div>
    <div class="auth-box">
      <div class="auth-left line_y_after_top line_y_before_top">
        <bg-model />
      </div>
      <div class="auth-right">
        <auth-form />
        <auth-footer />
      </div>
    </div>
    <div class="auth-options line_x_before_right">
      <auth-options />
    </div>
    <div class="auth-decorator">
      <auth-decorator />
    </div>
  </div>
</template>

<style>
@import url('./styles/line.css') layer(base);
</style>

<style scoped>
@layer page {
  .auth {
    --title-size: 1.3;
    --subtitle-size: calc( var(--title-size) * .7);
    --base-margin: calc( var(--normal) * 1.5);
    --auth-right: 2rem;
    --right-width: 30%;
    --decorator-scale: .5;
    --decorator-width: 10vw;
    --left-offset: 6rem;

    position: relative;
    right: var(--auth-right);

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    width: 100vw;
    height: calc(100vh - var(--global-header-height));
  }

  .auth-box {
    display: flex;
    flex: 1;
    justify-content: space-between;

    width: 100%;
    height: 0%;
  }

  .auth-right {
    --padding-left: 3rem;

    display: flex;
    flex-direction: column;

    width: var(--right-width);
    min-width: 40rem;
    padding-left: var(--padding-left);
  }

  .auth-header {
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .auth-header::before {
    content: "";

    position: absolute;
    bottom: 0;
    left: var(--left-offset, 6rem);

    height: 100%;
  }

  .auth-left {
    position: relative;
    left: var(--left-offset, 6rem);

    display: flex;
    align-items: center;
    justify-content: center;

    width: calc(70% - var(--left-offset));
    height: 100%;
  }

  .auth-left::after {
    content: "";

    position: absolute;
    top: 0;
    left: 0;

    height: calc(100% - var(--base-margin));
  }

  .auth-left::before {
    content: "";

    position: absolute;
    top: 0;
    right: var(--left-offset, 6rem);

    height: calc(100% + 2 * var(--base-margin));
  }

  .auth-options {
    position: relative;

    display: flex;
    justify-content: flex-end;

    width: 100%;
    padding: var(--base-margin) 0;
  }

  .auth-options::before {
    content: "";

    position: absolute;
    top: 0;
    right: calc(-1 * var(--auth-right));

    width: calc(100% - var(--decorator-width));

  }

  .auth-decorator {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media (width <= 755px) {
    .auth-left::after,
    .auth-header::before {
      display: none;
    }
  }
  @media (width <= 954px) {
    .auth-left::before,
    .auth-third-party::before {
      display: none;
    }
  }

}
</style>
