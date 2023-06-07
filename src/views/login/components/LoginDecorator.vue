<script setup lang='ts'>
</script>

<template>
  <articlwe class="login-decorator">
    <header class="login-decorator_header">
      <div class="login-decorator_title1">
        Lorem ipsum dolor sit amet.
      </div>
      <div class="login-decorator_title2">
        Test
      </div>
    </header>
    <footer class="login-decorator_footer">
      <div class="login-decorator_block" />
      <div class="login-decorator_title3">
        Lorem ipsum dolor sit, amet.Lorem  dolor sit, amet. Lorem ipsum dolor sit, amet.Lorem ipsum dolor sit, amet.
      </div>
    </footer>
  </articlwe>
</template>

<style scoped>
@layer component {
  .login-decorator {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scale(.5);

    width: 10vw;

    font-size: var(--font-body-small);
    color: var(--white);
  }

  .login-decorator_header {
    display: flex;
    margin-bottom: var(--small);
  }

  .login-decorator_title2 {
    position: relative;
    left: 10%;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    text-align: right;

    border: var(--border);
    border-width: 3px;
  }

  .login-decorator_footer {
    display: flex;
  }

  .login-decorator_block {
    width: 20%;
  }

  .login-decorator_title3 {
    position: relative;
    left: 55%;
    width: 80%;
  }
}
</style>
