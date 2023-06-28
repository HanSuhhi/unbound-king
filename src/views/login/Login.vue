<script setup lang='ts'>
import LoginTitle from "./components/LoginTitle.vue";
import LoginThrirdParty from "./components/LoginThrirdParty.vue";
import BgModel from "./components/BgModel.vue";
import LoginFooter from "./components/LoginFooter.vue";
import LoginForm from "./components/LoginForm.vue";
import LoginDecorator from "./components/LoginDecorator.vue";
import LoginOptions from "./components/LoginOptions.vue";
</script>

<template>
  <div class="login">
    <login-title />
    <div class="login-header line_y_before_all">
      <login-thrird-party />
    </div>
    <div class="login-box">
      <div class="login-left line_y_after_top line_y_before_top">
        <bg-model />
      </div>
      <div class="login-right">
        <login-form />
        <login-footer />
      </div>
    </div>
    <div class="login-options line_x_before_right">
      <login-options />
    </div>
    <div class="login-decorator">
      <login-decorator />
    </div>
  </div>
</template>

<style>
@import url('./styles/line.css') layer(base);
</style>

<style scoped>
@layer page {
  .login {
    --title-size: 1.3;
    --subtitle-size: calc( var(--title-size) * .7);
    --base-margin: calc( var(--normal) * 1.5);
    --login-right: 2rem;
    --right-width: 30%;
    --decorator-scale: .5;
    --decorator-width: 10vw;
    --left-offset: 6rem;

    position: relative;
    right: var(--login-right);

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    width: 100vw;
    height: calc(100vh - var(--global-header-height));
  }

  .login-box {
    display: flex;
    flex: 1;
    justify-content: space-between;

    width: 100%;
    height: 0%;
  }

  .login-right {
    --padding-left: 3rem;

    display: flex;
    flex-direction: column;

    width: var(--right-width);
    min-width: 40rem;
    padding-left: var(--padding-left);
  }

  .login-header {
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .login-header::before {
    content: "";

    position: absolute;
    bottom: 0;
    left: var(--left-offset, 6rem);

    height: 100%;
  }

  .login-left {
    position: relative;
    left: var(--left-offset, 6rem);

    display: flex;
    align-items: center;
    justify-content: center;

    width: calc(70% - var(--left-offset));
    height: 100%;
  }

  .login-left::after {
    content: "";

    position: absolute;
    top: 0;
    left: 0;

    height: calc(100% - var(--base-margin));
  }

  .login-left::before {
    content: "";

    position: absolute;
    top: 0;
    right: var(--left-offset, 6rem);

    height: calc(100% + 2 * var(--base-margin));
  }

  .login-options {
    position: relative;

    display: flex;
    justify-content: flex-end;

    width: 100%;
    padding: var(--base-margin) 0;
  }

  .login-options::before {
    content: "";

    position: absolute;
    top: 0;
    right: calc(-1 * var(--login-right));

    width: calc(100% - var(--decorator-width));

  }

  .login-decorator {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media (width <= 755px) {
    .login-left::after,
    .login-header::before {
      display: none;
    }
  }
  @media (width <= 954px) {
    .login-left::before,
    .login-third-party::before {
      display: none;
    }
  }

}
</style>
