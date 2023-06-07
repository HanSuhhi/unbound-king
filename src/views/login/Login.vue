<script setup lang='ts'>
import LoginTitle from "./components/LoginTitle.vue";
import LoginThrirdParty from "./components/LoginThrirdParty.vue";
import BgModel from "./components/BgModel.vue";
import LoginFooter from "./components/LoginFooter.vue";
import LoginForm from "./components/LoginForm.vue";
import LoginDecorator from "./components/LoginDecorator.vue";
</script>

<template>
  <div class="login">
    <login-title />
    <login-thrird-party />
    <div class="login-box">
      <div class="login-left">
        <bg-model />
      </div>
      <div class="login-right">
        <login-form />
        <login-footer />
      </div>
    </div>
    <login-decorator />
  </div>
</template>

<style scoped>
@layer page {
  .login {
    --title-size: 1.3;
    --subtitle-size: calc( var(--title-size) * .7);
    --base-margin: calc( var(--normal) * 1.5);
    --login-right: 2rem;

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
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  .login-right {
    --padding-left: 3rem;

    display: flex;
    flex-direction: column;

    width: 30%;
    margin-top: var(--large);
    padding-left: var(--padding-left);
  }

  .login-left {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 70%;
    height: 100%;
  }

  .login-left::after {
    content: "";

    position: absolute;
    right: 0;

    width: 1px;
    height: 100%;

    background: linear-gradient(180deg,var(--border-color),var(--border-color) 50%,transparent 0,transparent);
    background-size: 1px var(--mini) ;

    -webkit-mask:
      /* linear-gradient(to top,var(--black-bright-2) 80%,transparent), */
      linear-gradient(to bottom,var(--black-bright-2) 80%,transparent),
      linear-gradient(hsl(0deg 0% 0%),hsl(0deg 0% 0%));

    -webkit-mask-composite: destination-in;
  }
}
</style>
