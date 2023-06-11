<script setup lang='ts'>
</script>

<template>
  <article class="input-decorator">
    <header class="input-decorator_header">
      <div class="input-decorator_title1">
        <span>
          Lorem ipsum dolor sit amet.
        </span>
      </div>
      <div class="input-decorator_title2">
        Test
      </div>
    </header>
    <footer class="input-decorator_footer">
      <div class="input-decorator_block" />
      <div class="input-decorator_title3">
        Lorem ipsum dolor sit, amet.Lorem  dolor sit, amet. Lorem ipsum dolor sit, amet.Lorem ipsum dolor sit, amet.
      </div>
    </footer>
  </article>
</template>

<style scoped>
@layer component {
  .input-decorator {
    zoom: .5;

    width: var(--decorator-width);
    min-width: 40rem;

    font-size: var(--font-body-small);
    color: var(--white);
  }

  .input-decorator_header {
    display: flex;
    margin-bottom: var(--small);
  }

  .input-decorator_title1 {
    text-align: right;
  }

  .input-decorator_title1 > span{
    display: inline-block;
    width: 50%;
    text-align: right;
  }

  .input-decorator_title2 {
    position: relative;
    left: 5%;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40%;

    text-align: right;

    border: var(--border);
    border-width: 3px;
  }

  .input-decorator_footer {
    display: flex;
  }

  .input-decorator_block {
    width: 20%;
  }

  .input-decorator_title3 {
    position: relative;
    left: 25%;
    width: 30%;
  }
}
</style>
